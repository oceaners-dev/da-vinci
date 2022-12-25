import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import { useClickOutside, useShallowEffect } from '../../hooks'
import { SvgBottomArrow, SvgClear, SvgTick } from '../../utils/svg'
import { ForwardRefWithStaticComponents } from '../../utils/ts/forward-ref-with-static-component'
import { Card } from '../card-UNFINISHED/Card'
import { Input } from '../input/Input'
import { Tag } from '../tag/Tag'

// TODO: add tag for selected items
// TODO: on click clear button, submit firing

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const {
      allowDeselect, // ✅
      bordered, // 🚨
      classNames, // 🚨
      clearable, // 🚨
      customOptionComponent, // 🚨
      closeOnSelect, // ✅
      defaultSelectedValues, // ✅
      creatable, // 🚨
      disabled, // ✅
      dropdownPosition, // 🚨
      filter, // 🚨
      initiallyOpen, // ✅
      groups, // 🚨
      helperText, // ✅
      options, // ✅
      hideSelectedOptions, // ✅
      label, // ✅
      multiple, // ✅
      onChange, // ✅
      onDropdownToggle, // ✅
      renderOptions, // ✅
      required, // 🚨
      searchable, // 🚨
      withoutDropdownIcon, // ✅
      zIndex, // 🚨
      ...rest
    } = props

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>()
    const [selected, setSelected] = useState(defaultSelectedValues)
    const [optionsList, setOptionsList] = useState<Option[]>(options)

    useEffect(() => {
      if (!initiallyOpen) return
      setIsDropdownOpen(initiallyOpen)
    }, [initiallyOpen])

    const handleSelect = (value: Option) => {
      if (!multiple) {
        if (!selected) {
          setSelected([value])
        } else {
          if (!allowDeselect) {
            // TODO: optimize this part
            if (selected[0].value === value.value) {
              return
            } else {
              setSelected([value])
            }
          } else {
            setSelected(selected[0].value === value.value ? undefined : [value])
          }
        }
      } else {
        // if selected, remove it
        if (!selected) {
          setSelected([value])
        } else {
          if (selected.find((item) => item.value === value.value)) {
            setSelected(selected.filter((item) => item.value !== value.value))
          } else {
            setSelected([...selected, value])
          }
        }
      }
      if (hideSelectedOptions) {
        setOptionsList(
          optionsList.filter((option) => option.value !== value.value),
        )
      }
    }

    const cardClickRef = useClickOutside(() => {
      setIsDropdownOpen(false)
    })

    useShallowEffect(() => {
      if (!window) return
      if (onChange) {
        // TODO: onchange triggers error on page load
        onChange(selected)
      }
    }, [selected])

    return (
      <div
        className={
          `flex max-w-[320px] w-full flex-col gap-2 relative` +
          (disabled ? ` opacity-50` : ``)
        }
      >
        <Input
          wrapperClasses="!cursor-pointer !w-full"
          className={
            `h-10 !cursor-pointer caret-transparent` +
            (selected && selected.length !== 0 ? ' !w-0' : ' !w-full')
          }
          value=""
          readOnly
          disabled={disabled}
          onClick={() => {
            if (!disabled) {
              setIsDropdownOpen(!isDropdownOpen)
            }
            if (onDropdownToggle) {
              onDropdownToggle()
            }
          }}
          wrapperOnClick={() => {
            if (!disabled) {
              setIsDropdownOpen(!isDropdownOpen)
            }
            if (onDropdownToggle) {
              onDropdownToggle()
            }
          }}
          showClear={false}
          placeholder="Select teacher"
          disableMoving={true}
          rightComponent={
            !withoutDropdownIcon && clearable ? (
              selected && selected.length !== 0 ? (
                <button className="px-2 relative z-20">
                  <SvgClear className="h-full w-3 relative z-20 inline-flex" />
                </button>
              ) : (
                <button
                  className="px-2 relative z-20"
                  onClick={() => {
                    if (!disabled) {
                      setIsDropdownOpen(!isDropdownOpen)
                    }
                    if (onDropdownToggle) {
                      onDropdownToggle()
                    }
                  }}
                >
                  <SvgBottomArrow />
                </button>
              )
            ) : (
              <button
                className="px-2 relative z-20"
                onClick={() => {
                  if (!disabled) {
                    setIsDropdownOpen(!isDropdownOpen)
                  }
                  if (onDropdownToggle) {
                    onDropdownToggle()
                  }
                }}
              >
                <SvgBottomArrow />
              </button>
            )
          }
          label={label}
          leftComponent={
            selected &&
            selected.length !== 0 && (
              <div className="relative z-20 w-full flex flex-row flex-wrap pl-2 py-2 gap-x-2 gap-y-1">
                <div
                  className="h-full w-full absolute top-0 left-0 z-10"
                  onClick={() => {
                    if (!disabled) {
                      setIsDropdownOpen(!isDropdownOpen)
                    }
                    if (onDropdownToggle) {
                      onDropdownToggle()
                    }
                  }}
                />
                {selected.map((item) => {
                  return (
                    <Tag
                      key={uuid()}
                      closable
                      className="relative z-20"
                      removeNodeOnClose={false}
                      onClose={() => {
                        handleSelect(item)
                      }}
                    >
                      {item.label}
                    </Tag>
                  )
                })}
              </div>
            )
          }
          helperText={helperText}
        />
        <div className="w-full box-border relative mt-3">
          {isDropdownOpen && options && !disabled && (
            <Card
              ref={cardClickRef}
              data-name="dropdown-wrapper"
              className={
                `top-0 !p-0 left-0 w-full h-auto overflow-y-auto absolute max-h-52 !rounded-lg !outline-none !bg-gray-200 shadow-none flex flex-col items-start ` +
                (classNames?.dropdownWrapper
                  ? ` ${classNames.dropdownWrapper}`
                  : '')
              }
            >
              {optionsList &&
                optionsList.map((option) => {
                  // TODO: change key
                  const isSelected = selected?.find(
                    (item) => item.value === option.value,
                  )
                  return (
                    <button
                      className="w-full"
                      key={option.value}
                      onClick={() => {
                        handleSelect(option)

                        // this part must be the last part
                        if (!closeOnSelect && !multiple) {
                          setIsDropdownOpen(false)
                        }
                        if (closeOnSelect) {
                          setIsDropdownOpen(false)
                        }
                      }}
                    >
                      {renderOptions ? (
                        renderOptions(option)
                      ) : (
                        <div className="px-4 py-1 text-sm hover:bg-gray-300 cursor-pointer w-full text-left flex flex-row items-center justify-between w-full">
                          <span>{option.label}</span>
                          {isSelected && <SvgTick className="w-4 h-4" />}
                        </div>
                      )}
                    </button>
                  )
                })}
            </Card>
          )}
        </div>
      </div>
    )
  },
)

const OptionComponent = React.forwardRef<HTMLDivElement, Option>(
  (props, ref) => {
    return <div />
  },
)

Select.defaultProps = {
  allowDeselect: true,
  bordered: false,
  dropdownPosition: 'auto',
  initiallyOpen: false,
  clearable: true,
  searchable: false,
  hideSelectedOptions: false,
}

export interface SelectProps {
  /**
   * When `multiple` is false and `allowDeselect` is true, user can deselect the selected option.
   * @default true
   */
  allowDeselect?: boolean
  /**
   * Is input has borders
   * @default false
   */
  bordered?: boolean
  /**
   * You can find element's name at `data-name` attribute
   */
  classNames?: {
    dropdownWrapper?: string
    label?: string
    selectWrapper?: string
  }
  /**
   * if true, users can deselect options at once or one by one
   * @defaults true
   */
  clearable?: boolean
  /**
   * if true, dropdown closes after click. if `multiple` is true, dropdown stays open by default.
   */
  closeOnSelect?: boolean
  creatable?: boolean
  /**
   * You can pass default selected values. If `multiple` is false, you can pass only one value. Otherwise, we will take `first value`.
   */
  customOptionComponent?: React.ComponentType<Option>
  defaultSelectedValues?: Option[]
  /**
   * if true, Select will be unclickable
   */
  disabled?: boolean
  /**
   * if you want to make dropdown position static, you can use this prop
   * @defaults 'auto'
   */
  dropdownPosition?: 'top' | 'bottom' | 'auto'
  /**
   * Custom search/filter logic for options. `searchable` prop must be true.
   */
  filter?: (value: string, option: Option) => boolean
  /**
   * for group options
   */
  groups?: {
    id: string
    title: string
  }
  /**
   * A tiny description for the Select input. Will be display under the label.
   */
  helperText?: string
  /**
   * if true, selected elements will be removed from dropdown
   * @defaults false
   */
  hideSelectedOptions?: boolean
  /**
   * If true, dropdown is open by default.
   * @defaults false
   */
  initiallyOpen?: boolean
  /**
   * A title for the Select input. Will be display at the top of the Select element.
   */
  label?: string
  /**
   * if true, users can select multiple options
   */
  multiple?: boolean
  onChange?: (value?: Option[]) => void
  /**
   * gives you the information about the current state of the dropdown
   */
  onDropdownToggle?: () => void
  options: Option[]
  /**
   *
   * @param renderOptions Custom render function for options.
   * @returns
   */
  renderOptions?: (option: Option) => React.ReactNode
  /**
   * Adds an `asterisk` to the label
   */
  required?: boolean
  /**
   * Adds a search input to the dropdown
   * @defaults false
   */
  searchable?: boolean
  /**
   * if true, arrow icon at the right side will be hidden
   */
  withoutDropdownIcon?: boolean
  /**
   * @see classNames.dropdownWrapper
   * You can add classNames with `classNames.dropdownWrapper` for dropdown wrapper
   */
  zIndex?: number
}

export interface Option {
  [key: string]: any
  label: string
  value: string
}

export type SelectComponent = ForwardRefWithStaticComponents<
  SelectProps,
  { Option: typeof OptionComponent }
>
