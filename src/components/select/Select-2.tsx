import { isObject, useClickOutside, useSafeEffect } from 'oceaners-hooks'
import { useCallback, useRef, useState } from 'react'
import uuid from 'react-uuid'
import { useSelect } from '../../hooks'
import { SvgBottomArrow, SvgClear } from '../../utils/svg'
import { Input } from '../input/Input'
import { Text } from '../text/Text'
import { IOption, ISelect } from './types'

export default function SelectNew(props: ISelect) {
  const {
    options, // ✅
    allowDeselect, // ✅
    clearable, // ✅
    closeOnSelect,
    //  disabled, // 🚨
    //  dropdownPosition, // 🚨
    helperText, // ✅
    //  hideSelectedOptions, // 🚨
    getSelectedOptions, // ✅
    label, // 🚨
    multiple, // ✅
    onChange, // ✅
    onDropdownOpen, // ✅
    placeholder, // ✅
    renderOption, // 🧐
    searchable, // ✅
    withoutDropdownIcon, // 🚨
  } = props

  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [listingOptions, setListingOptions] = useState(options)

  useSafeEffect(() => {
    setListingOptions(options)
  }, [options])

  const clickRef = useClickOutside<HTMLInputElement>(() => {
    setIsDropdownOpened(false)
    setListingOptions(options)
    inputRef.current.value = ''
  })

  const { values, setValues, clear } = useSelect({
    allowDeselect,
    key: 'value',
    multiple,
    onChange: (values) => onChange?.(values),
  })

  useSafeEffect(() => {
    getSelectedOptions?.(values)
  }, [values])

  const clearValues = useCallback(() => {
    if (clearable) {
      clear()
    }
  }, [clearable, setValues])

  return (
    <div>
      <div className="inline-block h-min w-min" ref={clickRef}>
        <Input
          ref={inputRef}
          placeholder={
            values && Array.isArray(values) && values.length > 0
              ? values.length + ' selected'
              : isObject(values) && (values as unknown as IOption).label
              ? (values as unknown as IOption).label
              : placeholder
              ? placeholder
              : 'Select an option'
          }
          autoComplete="off"
          label={label}
          className="cursor-pointer"
          onClick={() => {
            setIsDropdownOpened(true)
            onDropdownOpen?.()
          }}
          onChange={(e) => {
            const searchingLabel = e.target.value
            if (searchable) {
              const searchResults = options.filter(
                (a) => a.label.toLowerCase().search(searchingLabel) !== -1,
              )
              setListingOptions(searchResults)
            }
          }}
          onBlur={() => {
            if (multiple && closeOnSelect !== true) {
              inputRef.current?.focus()
            }
          }}
          helperText={helperText}
          wrapperOnClick={() => {
            setIsDropdownOpened(true)
            onDropdownOpen?.()
          }}
          wrapperClasses="cursor-pointer"
          rightIcon={
            clearable ? (
              values &&
              (isObject(values) ||
                (Array.isArray(values) && values.length > 0)) && (
                <SvgClear onClick={() => clearValues()} />
              )
            ) : (
              <SvgBottomArrow
                className={isDropdownOpened === true ? 'rotate-180' : ''}
              />
            )
          }
        />
        <div className="relative h-0 w-full">
          {isDropdownOpened && listingOptions && (
            <div
              aria-label="dropdown-options-wrapper"
              className={`absolute left-0 h-fit max-h-52 w-full overflow-y-auto rounded-lg bg-gray-200 py-1 ${
                helperText ? 'top-4' : 'top-2'
              }`}
            >
              {listingOptions.map((option) => {
                const isSelected =
                  typeof values === 'object' && Array.isArray(values)
                    ? (values as IOption[]).find(
                        (x) => x.value === option.value,
                      )
                    : typeof values === 'string'
                    ? option.value === values
                    : option === values

                return renderOption ? (
                  renderOption(option)
                ) : (
                  <div
                    key={uuid()}
                    onClick={() => {
                      setValues(option)

                      if (
                        (!multiple && typeof closeOnSelect === 'undefined') ||
                        closeOnSelect
                      ) {
                        setIsDropdownOpened(false)
                      } else {
                        inputRef.current?.focus()
                      }
                    }}
                    className={`cursor-pointer px-4 py-1 hover:bg-gray-300 ${
                      isSelected ? 'bg-gray-300' : ''
                    }`}
                  >
                    <Text size="xs">{option.label}</Text>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
SelectNew.defaultProps = {
  allowDeselect: true,
  clearable: false,
  searchable: true,
}
