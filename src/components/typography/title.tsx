import React, { useState } from 'react'
import { ClipboardCopy } from '../../hooks/clickCopyContent'

export default function Title(props: TitleProps) {
  const [onMouse, setonMouse] = useState(false)

  const {
    children,
    className,
    heading,
    weight,
    color,
    copyable,
    context,
    style,
  } = props
  const textSize = HeadingSize(heading as string)
  const copyContent = context ? context : children
  return (
    <div
      className={`flex w-fit ${className ? className + ' ' : ''}${
        textSize + ' '
      }${weight ? 'font-' + weight : ''} ${
        copyable ? 'pr-5' : ''
      }${HeadingColor(color as string)}`}
      style={style}
      onMouseOver={(e) => setonMouse(true)}
      onMouseOut={(e) => setonMouse(false)}
    >
      {children}
      {copyable && onMouse && <ClipboardCopy copyText={copyContent} />}
    </div>
  )
}

Title.defaultProps = {
  heading: '1',
  weight: 'normal',
}
export interface TitleProps {
  heading?: '1' | '2' | '3' | '4' | '5' | '6'
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black'
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'tertiary'
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  copyable?: boolean
  context?: string
}

const HeadingColor = (color: string) => {
  switch (color) {
    case 'primary':
      return 'text-oceaner-blue-700'
    case 'secondary':
      return 'text-valhala-orange-500'
    case 'warning':
      return 'text-alert'
    case 'danger':
      return 'text-error'
    case 'tertiary':
      return 'text-odin-gray-900'
    default:
      return 'text-ui-black'
  }
}
const HeadingSize = (size: string) => {
  switch (size) {
    case '2':
      return 'text-ui-7xl'
    case '3':
      return 'text-ui-6xl'
    case '4':
      return 'text-ui-5xl'
    case '5':
      return 'text-ui-4xl'
    case '6':
      return 'text-ui-3xl'
    default:
      return 'text-ui-8xl'
  }
}
