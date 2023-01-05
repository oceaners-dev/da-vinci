import React, { forwardRef, useEffect, useId, useState } from 'react'
import { SvgTick } from '../../utils/svg'
import { ForwardRefWithStaticComponents } from '../../utils/ts/forward-ref-with-static-component'
import { CheckboxGroup } from './group'

/**
 * Layers are `unselectable` (`::selection: none`) by default. If you want to make it selectable, you can use the `selectable` prop.
 */
export const CheckBox: CheckboxComponent = forwardRef<
  HTMLInputElement,
  CheckboxProps
>((props, ref) => {
  const id = useId()
  const {
    classNames, // ✅
    description, // ✅
    checked, // ✅
    name, // ✅
    disabled, // ✅
    onChange, // ✅
    label, // ✅
    hideCheckbox, // ✅
    defaultChecked, // ✅
    isLabelSelectable, // ✅
    // customIcon, // 🚨 TODO
  } = props

  if (!label && !name) {
    throw new Error('You must provide a label or name to checkbox')
  }
  const [isChecked, setIsChecked] = useState<boolean>(
    checked ? checked : defaultChecked ? defaultChecked : false,
  )

  useEffect(() => {
    setIsChecked(checked ? checked : defaultChecked ? defaultChecked : false)
  }, [defaultChecked, checked, onChange])

  useEffect(() => {
    onChange && onChange({ [name]: isChecked as boolean })
  }, [isChecked])

  return (
    <div
      data-name="checkbox-wrapper"
      className={`relative flex max-w-[200px] flex-row cursor-pointer ${
        classNames?.wrapper || ''
      } w-fit ${disabled ? 'pointer-events-none opacity-50  ' : ''} ${
        description ? 'items-start' : 'items-center'
      }`}
      onClick={() => {
        setIsChecked(!isChecked)
      }}
    >
      {!hideCheckbox && (
        <div
          ref={ref}
          id={id}
          data-name="checkbox"
          className={`w-4 h-4 outline outline-2 rounded-sm transition-all transform duration-150 aspect-square ${
            isChecked
              ? 'bg-blue-500 outline-blue-500 hover:bg-blue-400 hover:outline-blue-400'
              : 'bg-white outline-gray-200 hover:bg-gray-200'
          } ${classNames?.checkbox || ''}`}
        >
          <SvgTick
            className={`transition-all transform duration-150 ${
              isChecked ? 'text-white' : ''
            }`}
            style={{
              opacity: isChecked ? 1 : 0,
            }}
          />
        </div>
      )}

      {label && (
        <div className="flex flex-col gap-1">
          <label
            data-name="checkbox-label"
            htmlFor={id}
            className={`cursor-pointer leading-3 pl-2 w-[-webkit-fill-available] ${
              isLabelSelectable ? '' : 'select-none'
            } ${classNames?.label || ''}`}
          >
            {label}
          </label>
          {description && (
            <div
              className={`text-[10px] pl-2 leading-none ${
                classNames?.description || ''
              }`}
              data-name="checkbox-description"
            >
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  )
}) as any

CheckBox.defaultProps = {
  isLabelSelectable: false,
}

export type CheckboxComponent = ForwardRefWithStaticComponents<
  CheckboxProps,
  { Group: typeof CheckboxGroup }
>

/**
 * Layers are `unselectable`. by default. If you want to make it selectable, you can use the `selectable` prop.
 */
export interface CheckboxProps {
  /**
   * This prop is uncontrollable. If you set it true, you can't change it with click.
   * This is `defualt` input behavior.
   * If you want to change it with click, use `defaultChecked` prop.
   */
  checked?: boolean
  /**
   * For wrapper div.
   */
  classNames?: {
    checkbox?: string
    description?: string
    label?: string
    wrapper?: string
  }
  /**
   * Custom tick box icon. Use tailwind classes for style `selected` and `unselected` states.
   */
  customIcon?: React.ReactNode
  /**
   * @type boolean
   */
  defaultChecked?: boolean
  description?: React.ReactNode
  disabled?: boolean
  extraInfo?: React.ReactNode
  /**
   * Just `hides` the tick box between the label. If you use `customIcon` it's hiding automatically.
   */
  hideCheckbox?: boolean
  /**
   * Layers are `unselectable`. by default. If you want to make it selectable, you can use the `selectable` prop.
   */
  isLabelSelectable?: boolean
  label?: React.ReactNode
  /**
   * We don't know why but some of UI libraries lets name optional. We do not want to
   * compare labels or some hacky things. Please provide a name.
   */
  name: string
  /**
   * @returns {object} { [name]: boolean }
   */
  onChange?: (x: object) => void
}

CheckBox.Group = CheckboxGroup
