import React from 'react'

export type TitleProps = {
  className?: string
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'tertiary'
  level: 1 | 2 | 3 | 4 | 5 | 6
  text: string
}

const Title: React.FC<TitleProps> = ({ className, color, text, level }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const classNames = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-bold',
    3: 'text-2xl font-bold',
    4: 'text-xl font-bold',
    5: 'text-lg font-bold',
    6: 'text-md font-bold',
  }

  const colorClass = color ? `text-${color}` : ''

  return (
    <Tag className={`${classNames[level]} ${className} ${colorClass}`}>
      {text}
    </Tag>
  )
}

export { Title }
