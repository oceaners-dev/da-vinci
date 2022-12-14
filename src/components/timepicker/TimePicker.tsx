import React, { forwardRef, useCallback, useState } from 'react'
import uuid from 'react-uuid'
import { useClickOutside } from '../../hooks'
import { useMergedRef } from '../../hooks/use-merged-ref'
import { Card } from '../card-UNFINISHED/Card'
import { Input } from '../input/Input'

/**
 * @param {string} defaultValue - default value of the input
 * @param {boolean} withIcon- displays clock at the end of the input
 * @description - Don't forget to define a width for the input for preventing the input from expanding
 */
export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (props, ref) => {
    const {
      withIcon, // ✅
      defaultValue, // ✅
      onChange, // ✅
      ...rest
    } = props

    // states
    const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false)
    const [timeValue, setTimeValue] = useState<string>(
      defaultValue ? defaultValue : '00:00',
    )

    // callbacks
    const openDropdown = useCallback(() => {
      setIsDropdownOpened(true)
    }, [])

    const closeDropdown = useCallback(() => {
      setIsDropdownOpened(false)
    }, [])

    // refs
    const refs = useMergedRef(ref)
    const outsideRef = useClickOutside(() => {
      closeDropdown()
    })

    const hours = new Array(24)
      .fill(0)
      .map((_, i) => (i < 10 ? `0${i}` : `${i}`))

    const minutes = new Array(60)
      .fill(0)
      .map((_, i) => (i < 10 ? `0${i}` : `${i}`))

    return (
      <div
        ref={outsideRef}
        className="w-fit h-fit relative"
        data-name="time-picker-wrapper"
      >
        <Input
          onFocus={openDropdown}
          wrapperClasses="font-mono"
          // rightIcon={
          //   withIcon ? (
          //     <SvgClock className="-ml-[5px] pointer-events-none text-gray-600" />
          //   ) : null
          // }
          // onClick={openDropdown}
          ref={refs}
          value={timeValue}
          onChange={(e) => {
            setTimeValue(e.target.value)
            onChange && onChange(e)
          }}
          className="hide-indicator"
          type={'time'}
          {...rest}
        />
        {isDropdownOpened && (
          <Card
            data-name="time-picker-dropdown"
            className="grid grid-cols-2 w-full mt-2 !p-0 overflow-hidden"
          >
            <div
              data-name="time-picker-hours"
              className="overflow-y-auto !h-40 flex items-center flex-col scrollbar-hide"
            >
              {hours.map((hour) => {
                const minute = timeValue?.split(':')[1]
                const currentHour = timeValue?.split(':')[0]
                return (
                  <button
                    className={`py-1 hover:bg-gray-100 w-full text-sm rounded-r ${
                      currentHour === hour ? 'bg-gray-100' : ''
                    }`}
                    key={uuid()}
                    onClick={() => {
                      setTimeValue(`${hour}:${minute}`)
                      const event = new Event('input', { bubbles: true })
                      // TODO: Trigger onChange event at `TimePicker`.
                      // refs?.current.dispatchEvent(event)
                    }}
                  >
                    {hour}
                  </button>
                )
              })}
            </div>
            <div
              data-name="time-picker-minutes"
              className="overflow-y-auto !h-40 flex items-center flex-col scrollbar-hide"
            >
              {minutes.map((minute) => {
                const hour = timeValue?.split(':')[0]
                const currentMinute = timeValue?.split(':')[1]
                return (
                  <button
                    className={`py-1 hover:bg-gray-100 w-full text-sm rounded-l ${
                      currentMinute === hour ? 'bg-gray-100' : ''
                    }`}
                    key={uuid()}
                    onClick={() => {
                      setTimeValue(`${hour}:${minute}`)
                      const event = new Event('input', { bubbles: true })
                      // TODO: Trigger onChange event at `TimePicker`.
                      // element.dispatchEvent(event)
                    }}
                  >
                    {minute}
                  </button>
                )
              })}
            </div>
          </Card>
        )}
      </div>
    )
  },
)

TimePicker.defaultProps = {
  withIcon: true,
}

export interface TimePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * @description Eg. `"14:30"`
   */
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * @description Adds clock icon to the right side of the input
   */
  withIcon?: boolean
}
