import React from 'react'
import { ColorVariants } from '../../utils/types'

export type TitleProps = {
  className?: string
  color?: ColorVariants
  level: 1 | 2 | 3 | 4 | 5 | 6
  text: string
}

const Title: React.FC<TitleProps> = ({ className, color, text, level }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const classNames = {
    1: 'text-dv-h1 font-bold',
    2: 'text-dv-h2 font-bold',
    3: 'text-dv-h3 font-bold',
    4: 'text-dv-h4 font-bold',
    5: 'text-dv-h5 font-bold',
    6: 'text-dv-h6 font-bold',
  }

  const colorClass = color ? `text-${color}` : ''

  return (
    <Tag className={`${classNames[level]} ${className} ${colorClass}`}>
      {text}
    </Tag>
  )
}

export { Title }
