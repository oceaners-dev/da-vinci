import React, { forwardRef, useEffect, useState } from 'react'
import { CheckboxProps } from './CheckBox'
// import { CheckboxProps } from './CheckBox';

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
          child as { key: string; props: CheckboxProps; type: string },
          {
            defaultChecked: defaultValue
              ? defaultValue.find((e) => {
                  return e.name === child.props.name
                })?.value
              : values.find((e) => e.name === child.props.name)?.value,
            checked: values.find((e) => e.name === child.props.name)?.value, // @ts-ignore
            onChange: (e) => {
              console.log({ e })
              const name = Object.keys(e)[0] as string
              const value = Object.values(e)[0] as boolean
              console.log({ values })
              const index = values.findIndex((e) => e.name === name)
              if (index === -1) {
                setValues([...values, { name, value }])
              } else {
                const newValues = [...values] // @ts-ignore
                newValues[name] = value
                setValues(newValues)
              }
            },
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
  children: React.ReactNode
  /**
   * The default value of the checkbox group.
   * This value overrides the default value of the checkbox.
   */
  defaultValue?: { name: string; value: boolean }[]
  description?: React.ReactNode
  label?: React.ReactNode
  listClassName?: React.HTMLAttributes<HTMLDivElement>['className']
  onChange?: (value: { name: string; value: boolean }[]) => void
  /**
   * If vertical, gap is 2px. If horizontal, gap is 4.
   */
  orientation?: 'horizontal' | 'vertical'
  required?: boolean
}
