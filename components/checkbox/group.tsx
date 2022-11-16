import React, { forwardRef, useEffect, useState } from 'react'
import { CheckboxProps } from './CheckBox'

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, ref) => {
    const {
      children, // ✅
      defaultValue, // ✅
      description, // ✅
      label, // ✅
      onChange, // ✅
      orientation, // ✅
      required, // TODO 🚨
      listClassName, // ✅
    } = props

    const [values, setValues] = useState<{ name: string; value: boolean }[]>(
      defaultValue ? defaultValue : [],
    )

    useEffect(() => {
      if (!values) return
      if (onChange) {
        onChange(values)
      }
    }, [values])

    const customChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(
          child as { props: CheckboxProps; type: string; key: string },
          {
            defaultChecked: defaultValue
              ? defaultValue.find((e) => e.name === child.props.name)?.value
              : values.find((e) => e.name === child.props.name)?.value,
            onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => {
              const name = e.target.name
              const value = e.target.checked
              if (e.target.checked) {
                setValues((prev) => [...prev, { name, value }])
              } else {
                setValues((prev) => prev.filter((v) => v.name !== name))
              }
            },
            // TODO: complete other functions
          },
        )
      }
      return child
    })

    return (
      <div ref={ref} className="flex flex-col gap-2">
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label className="text-sm font-medium text-gray-700">
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
          </div>
        )}
        <div
          className={`flex ${
            orientation === 'horizontal'
              ? 'flex-row  gap-4'
              : 'flex-col gap-[2px]'
          } ${listClassName || ''}`}
        >
          {customChildren}
        </div>
      </div>
    )
  },
)

CheckboxGroup.defaultProps = {
  orientation: 'vertical',
}

export interface CheckboxGroupProps {
  listClassName?: React.HTMLAttributes<HTMLDivElement>['className']
  children: React.ReactNode
  /**
   * The default value of the checkbox group.
   * This value overrides the default value of the checkbox.
   */
  defaultValue?: { name: string; value: boolean }[]
  description?: React.ReactNode
  label?: React.ReactNode
  onChange?: (value: { name: string; value: boolean }[]) => void
  /**
   * If vertical, gap is 2px. If horizontal, gap is 4.
   */
  orientation?: 'horizontal' | 'vertical'
  required?: boolean
}
