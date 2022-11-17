import React, {
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import uuid from 'react-uuid'
// import tailwind max-height types
import { useClickOutside } from '../../hooks/useClickOutside'
import { useEventListener } from '../../hooks/useEventListener'
import { SvgClear, SvgLeftArrow } from '../../utils/svg'
import { Card } from '../card-UNFINISHED/Card'
import { CheckBox } from '../checkbox/CheckBox'
import { Input } from '../input/Input'
import { Portal } from '../portal/Portal'
import Space from '../space/Space'
import { TagGroup } from '../tag/Group'
import { Tag } from '../tag/Tag'

// TODO: show/list selected items

export const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  (props, ref) => {
    const {
      data, // ✅
      clearable, // ✅
      creatable, // 🚨
      defaultValue, // ✅
      label, // ✅
      description, // ✅
      disabled, // ✅
      filter, // 🚨
      leftIcon, // 🚨
      initiallyOpened, // ✅
      itemComponent, // 🚨
      maxDropdownHeight, // ✅
      onChange, // ✅
      onSearchChange, // 🚨
      searchValue, // 🚨
      searchable, // 🚨
      placeholder, // ✅
      size, // 🚨
      withAsterisk, // 🚨
      dropdownZIndex, // ✅
      multiple, // ✅
      closeOnEsc, // ✅
      ...rest
    } = props

    // states
    const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(
      !disabled ? (initiallyOpened === true ? true : false) : false,
    )
    const [inputHeight, setInputHeight] = useState<number>()
    const [selected, setSelected] = useState<SingleSelect[] | string[]>(
      defaultValue ? defaultValue : [],
    )
    const [inputWidth, setInputWidth] = useState<number>()
    const [tagGroupWidth, setTagGroupWidth] = useState<number>()
    const [maxTagCount, setMaxTagCount] = useState<number>(999)

    // refs
    const inputRef = useRef<HTMLInputElement>(null)
    const inputId = useId().replaceAll(':', '') + '-input'
    const tagGroupRef = useRef<HTMLInputElement>(null)

    // callbacks
    const openDropdown = useCallback(() => {
      setIsDropdownOpened(true)
    }, [])

    const closeDropdown = useCallback(() => {
      setIsDropdownOpened(false)
    }, [])

    const getInputSizes = useCallback(() => {
      if (tagGroupRef) {
        if (tagGroupRef.current) {
          setTagGroupWidth(tagGroupRef.current.offsetWidth)
        }
      }
      if (!inputRef.current) return
      if (inputRef.current.offsetHeight === inputHeight) return
      setInputHeight(inputRef.current.offsetHeight)
      setInputWidth(inputRef.current.offsetWidth)
    }, [inputHeight])

    const selectHandler = useCallback(
      (value: SingleSelect | string) => {
        const selectedType = typeof value === 'string' ? 'string' : 'object'
        if (multiple) {
          if (selectedType === 'string') {
            if ((selected as string[]).includes(value as string)) {
              setSelected(
                (selected as string[]).filter((item: string) => item !== value),
              )
              if (onChange) {
                onChange(
                  (selected as string[]).filter(
                    (item: string) => item !== value,
                  ),
                )
              }
            } else {
              setSelected((selected as string[]).concat([value as string]))
              if (onChange) {
                onChange((selected as string[]).concat([value as string]))
              }
            }
          } else {
            if ((selected as SingleSelect[]).includes(value as SingleSelect)) {
              setSelected(
                (selected as SingleSelect[]).filter(
                  (item: SingleSelect) =>
                    item.label !== (value as SingleSelect).label,
                ),
              )
            } else {
              setSelected([
                ...(selected as SingleSelect[]),
                value as SingleSelect,
              ])
            }
          }
        } else {
          // @ts-ignore
          setSelected([value])
          if (onChange) {
            onChange(value)
          }
          closeDropdown()
        }
      },
      [multiple, selected, onChange, closeDropdown],
    )

    // custom hooks
    useEventListener('keyup', (e) => {
      if (closeOnEsc) {
        if (e.key === 'Escape') {
          closeDropdown()
        }
      }
    })

    const portalRef = useClickOutside(() => {
      closeDropdown()
    })

    // useeffects
    useEffect(() => {
      if (!inputRef.current) return
      getInputSizes()
    }, [inputRef.current])

    useEffect(() => {
      if (!tagGroupRef || !tagGroupRef.current) return
      getInputSizes()
    }, [selected, tagGroupRef])

    useEffect(() => {
      if (!tagGroupWidth || !inputWidth) return
      if (inputWidth - 150 >= tagGroupWidth) {
        // overflows
        setMaxTagCount(selected.length)
      }
    }, [tagGroupWidth, inputWidth, selected])

    return (
      <div className="w-full max-w-[250px] h-fit relative flex flex-col">
        {label && typeof label === 'string' ? (
          <div className="font-medium mb-[2px] leading-none text-sm">
            {label}
          </div>
        ) : (
          label
        )}
        {description && typeof description === 'string' ? (
          <div className="text-xs leading-none font-light mb-[6px]">
            {description}
          </div>
        ) : (
          description
        )}
        <div className={`${inputId} w-full h-fit relative flex flex-col`}>
          {/* tags start */}

          {/* tags end */}
          <Input
            type="text"
            ref={inputRef}
            leftIcon={leftIcon}
            hideInput={selected && selected.length > 0}
            leftComponent={
              selected &&
              selected.length > 0 && (
                <div className="z-50 w-full relative">
                  <TagGroup
                    focusFn={openDropdown}
                    ref={tagGroupRef}
                    // maxTagCount={maxTagCount}
                    showMore
                  >
                    {/* TODO: #1 Layout shifting on adding `Tags` to `Select` */}
                    {selected.map((item: SingleSelect | string) => {
                      const selectedType =
                        typeof item === 'string' ? 'string' : 'object'
                      const tagLabel: string =
                        selectedType === 'string'
                          ? (item as string)
                          : (item as SingleSelect).label
                      return (
                        item && (
                          <Tag
                            tagKey={tagLabel as string}
                            key={uuid()}
                            closable
                            className="z-[52] relative"
                            removeNodeOnClose={false}
                            onClose={() => {
                              if (typeof item === 'string') {
                                selectHandler(tagLabel)
                              } else {
                                selectHandler(item)
                              }
                            }}
                          >
                            {tagLabel}
                          </Tag>
                        )
                      )
                    })}
                  </TagGroup>
                </div>
              )
            }
            rightIcon={
              selected.length === 0 ? (
                <SvgLeftArrow className="rotate-[270deg] w-3 h-3" />
              ) : clearable ? (
                <button className="">
                  <SvgClear
                    className="w-4 h-4 !pointer-events-auto !z-20 cursor-pointer relative"
                    onClick={() => {
                      setSelected([])
                    }}
                  />
                </button>
              ) : (
                <SvgLeftArrow className="rotate-[270deg] w-3 h-3" />
              )
            }
            placeholder={!selected ? placeholder : ''}
            disabled={disabled}
            onClick={() => {
              openDropdown()
            }}
          />
          {isDropdownOpened && inputHeight && (
            <Portal
              ref={portalRef}
              target={`.${inputId}`}
              className={`
                absolute 
                ${dropdownZIndex ? dropdownZIndex : 'z-20 '} 
                left-0 w-full
            `}
              style={{
                top: inputHeight + 10,
              }}
            >
              <Card
                className={`shadow-sm px-0 py-0 ${
                  maxDropdownHeight ? maxDropdownHeight : 'max-h-[200px]'
                }
                overflow-hidden overflow-y-auto relative
              `}
              >
                {data.map((item) => {
                  const optionLabel =
                    typeof item === 'string' ? item : item.label
                  const optionValue =
                    typeof item === 'string' ? item : item.value
                  var defaultSelected
                  if (typeof item === 'string') {
                    defaultSelected = (selected as string[]).includes(item)
                  } else {
                    defaultSelected =
                      (selected as SingleSelect[]).filter(
                        (a) => a.value === optionValue,
                      ).length !== 0
                  }
                  return (
                    <CheckBox
                      key={optionValue}
                      onChangeChecked={() => {
                        if (typeof item === 'string') {
                          selectHandler(optionValue)
                        } else {
                          selectHandler(item)
                        }
                      }}
                      data-option={optionValue}
                      defaultChecked={defaultSelected}
                      className="w-full py-1 hover:bg-gray-100 px-3 font-light"
                      label={optionLabel}
                      name={optionValue}
                      hideCheckbox={multiple ? false : true}
                    />
                  )
                })}
              </Card>
              <Space spacing={10} />
              {selected && selected.length > 0 && <Input />}
            </Portal>
          )}
        </div>
      </div>
    )
  },
)

export interface SelectProps {
  /**
   * @param data - data to be displayed in the dropdown
   * @description If you want to pass array of objects, `label` and `value` params are required.
   */
  data: SingleSelect[] | string[]
  clearable?: boolean
  creatable?: boolean
  /**
   * @param defaultValue - default value of the select
   * @description If you want to pass array of objects, `label` and `value` params are required. Otherwise, you can pass array strings.
   * @description If you want to `pass multiple values`, you need to pass `multiple` prop as `true`. Otherwise, it will be overridden on select.
   */
  defaultValue?: string[] | SingleSelect[]
  label?: ReactNode
  description?: ReactNode
  placeholder?: string
  disabled?: boolean
  filter?: (value: string, item: SingleSelect) => boolean
  leftIcon?: JSX.Element
  /**
   * @description whether the dropdown is opened by default
   * @default false.
   */
  initiallyOpened?: boolean
  itemComponent?: ReactNode
  /**
   * @description max height of the dropdown
   * @default max-h-[200px]
   */
  maxDropdownHeight?: string
  onChange?: (value: string | string[] | SingleSelect | SingleSelect[]) => void
  onSearchChange?: (query: string) => void
  searchValue?: string
  searchable?: boolean
  size?: 'small' | 'medium' | 'large'
  withAsterisk?: boolean
  /**
   * @description the dropdown's z-index. Useful if you have another relative/absolute elements on the page.
   * @default z-20
   */
  dropdownZIndex?: React.HTMLAttributes<HTMLInputElement>['className']
  multiple?: boolean
  closeOnEsc?: boolean
}

export interface SingleSelect {
  label: string
  value: string
  [key: string]: any
}
