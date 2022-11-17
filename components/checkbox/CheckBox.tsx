import { forwardRef, useId } from 'react'
import { ForwardRefWithStaticComponents } from '../../utils/ts/forward-ref-with-static-component'
import { CheckboxGroup } from './group'

// TODO: style improvement
// TODO: card component

/**
 * Layers are `unselectable` (`::selection: none`) by default. If you want to make it selectable, you can use the `selectable` prop.
 */
export const CheckBox: CheckboxComponent = forwardRef<
  HTMLInputElement,
  CheckboxProps
>((props, ref) => {
  const id = useId()
  const {
    className, // ✅
    checked, // ✅
    name, // ✅
    disabled, // ✅
    onChangeEvent, // ✅
    onChangeChecked, // ✅
    label, // ✅
    hideCheckbox, // ✅
    defaultChecked, // ✅
    selectableLabel, // ✅
    customIcon, // 🚨 TODO
    type, // 🚨 TODO
  } = props

  if (!label && !name) {
    throw new Error('You must provide a label or name to checkbox')
  }

  return (
    <div
      className={`flex flex-row items-center cursor-pointer ${className || ''}`}
    >
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        name={name}
        value={name}
        defaultChecked={defaultChecked}
        id={id}
        className={` cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ${
          customIcon ? 'hidden' : ''
        } ${hideCheckbox ? 'hidden' : ''}`}
        onChange={(e) => {
          if (onChangeEvent) {
            onChangeEvent(e)
          }
          if (onChangeChecked) {
            onChangeChecked(e.target.checked)
          }
          // TODO: test these with group
        }}
      />
      {label && (
        <label
          htmlFor={id}
          className={`cursor-pointer pl-2 w-[-webkit-fill-available] ${
            selectableLabel ? '' : 'select-none'
          }`}
        >
          {label}
        </label>
      )}
    </div>
  )
}) as any

CheckBox.defaultProps = {
  selectableLabel: false,
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
   * For wrapper div.
   */
  className?: string
  /**
   * This prop is uncontrollable. If you set it true, you can't change it with click.
   * This is `defualt` input behavior.
   * If you want to change it with click, use `defaultChecked` prop.
   */
  checked?: boolean
  /**
   * We don't know why but some of UI libraries lets name optional. We do not want to
   * compare labels or some hacky things. Please provide a name.
   */
  name: string
  /**
   * @type boolean
   */
  defaultChecked?: boolean
  type?: 'default' | 'radio' | 'card' | 'pureCard' // 🚨
  disabled?: boolean
  /**
   * @returns event directly. if you want to get `booleam` value, use `onChangeChecked`
   */
  onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * @returns `true` if checked, `false` if unchecked.
   */
  onChangeChecked?: (checked: boolean) => void
  extraInfo?: React.ReactNode
  label?: React.ReactNode
  /**
   * Custom tick box icon. Use tailwind classes for style `selected` and `unselected` states.
   */
  customIcon?: React.ReactNode
  /**
   * Just `hides` the tick box between the label. If you use `customIcon` it's hiding automatically.
   */
  hideCheckbox?: boolean
  /**
   * Layers are `unselectable`. by default. If you want to make it selectable, you can use the `selectable` prop.
   */
  selectableLabel?: boolean
}

CheckBox.Group = CheckboxGroup
