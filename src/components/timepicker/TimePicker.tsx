import { forwardRef, useCallback, useState } from 'react'
import uuid from 'react-uuid'
import { useClickOutside } from '../../hooks'
import { useMergedRef } from '../../hooks/use-merged-ref'
import { Card } from '../card-UNFINISHED'
import { Input } from '../input'
import { SvgClock } from './Svg'

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (props, ref) => {
    const { withIcon, defaultValue, ...rest } = props

    // states
    const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false)
    console.log({ isDropdownOpened })

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
          rightIcon={
            withIcon ? (
              <SvgClock className="-ml-[5px] pointer-events-none text-gray-600" />
            ) : null
          }
          // onClick={openDropdown}
          ref={refs}
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
                return (
                  <button
                    className="py-1 hover:bg-gray-100 w-full text-sm rounded-r"
                    key={uuid()}
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
                return (
                  <button
                    className="py-1 hover:bg-gray-100 w-full text-sm rounded-l"
                    key={uuid()}
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
   * @description Adds clock icon to the right side of the input
   */
  withIcon?: boolean
  defaultValue?: string
}
