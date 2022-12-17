import React from 'react'
import classNames from 'classnames'
import { ColorVariants } from '../../utils/types'

export type TextProps = {
  as?: 'p' | 'span' | 'div'
  children: string
  className?: string
  color?: ColorVariants
  decoration?: 'underline' | 'line-through'
  highlight?: string[]
  highlightBgColor?: ColorVariants
  highlightColor?: string
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  highlight,
  highlightBgColor,
  highlightColor,
  size = 'base',
  color,
  decoration,
  as = 'p',
}) => {
  const classes = classNames(
    `text-${size}`,
    color && `text-${color}`,
    decoration && `${decoration}`,
    className,
  )

  const Element = as

  let highlightedText: React.ReactNode[] = []

  if (highlight) {
    const text = children.toString()
    const keywords = highlight
    let lastIndex = 0

    for (const keyword of keywords) {
      const index = text.indexOf(keyword, lastIndex)
      if (index !== -1) {
        highlightedText.push(text.slice(lastIndex, index))
        highlightedText.push(
          <span key={index} className={`${highlightBgColor} ${highlightColor}`}>
            {keyword}
          </span>,
        )
        lastIndex = index + keyword.length
      }
    }

    highlightedText.push(text.slice(lastIndex))
  } else {
    highlightedText = [children]
  }

  return <Element className={classes}>{highlightedText}</Element>
}

export { Text }
