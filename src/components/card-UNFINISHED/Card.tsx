import React from 'react'

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { children, className, ...rest } = props

    return (
      <div ref={ref} className={`card-classes ${className || ''}`} {...rest}>
        {children}
      </div>
    )
  },
)

Card.defaultProps = {
  hasBorders: true,
}

/**
 * @param children - The content of the card.
 * @param className - The class name of the card.
 * @param cover - The cover of the card. It is a ReactNode. It will "cover" the card completely
 * @param hasBorders - The card has borders or not. Default is `true`.
 * @param headerText - The header text of the card.
 * @param headerLine - The line under header title. Default is `true`.
 * @param headerRight - The right side of the header. It is a ReactNode.
 * @param header - Header component if headerText does not meet your needs
 */
export interface CardProps {
  children: React.ReactNode
  className?: string
  cover?: React.ReactNode
  hasBorders?: boolean
  header?: React.ReactNode
  headerLine?: boolean
  headerText?: string
  ref?: React.Ref<HTMLDivElement>
}
