import React from 'react'
import { Input, InputProps } from '../input/Input'

function DatePicker(props: InputProps) {
  return <Input type="datetime-local" className="pr-4" {...props} />
}

export default React.memo(DatePicker)
