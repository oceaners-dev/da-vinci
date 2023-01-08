import React, { forwardRef, useState } from 'react'
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
    const [timeValue, setTimeValue] = useState<string>(
      defaultValue ? defaultValue : '00:00',
    )

    return (
      <div className="relative h-fit w-fit" data-name="time-picker-wrapper">
        <Input
          wrapperClasses="font-mono pr-2"
          value={timeValue}
          onChange={(e) => {
            setTimeValue(e.target.value)
            onChange && onChange(e)
          }}
          className="hide-indicator"
          type={'time'}
          {...rest}
        />
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
