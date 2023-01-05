import React from 'react'

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { children, className, ...rest } = props

    return (
      <div
        ref={ref}
        className={`card-classes text-dv-text-01 ${className || ''}`}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

Card.defaultProps = {
  bordered: 'true',
}

/**
 * @param children - The content of the card.
 * @param className - The class name of the card.
 * @param cover - The cover of the card. It is a ReactNode. It will "cover" the card completely
 * @param bordered - The card has borders or not. Default is `true`.
 * @param headerText - The header text of the card.
 * @param headerLine - The line under header title. Default is `true`.
 * @param headerRight - The right side of the header. It is a ReactNode.
 * @param header - Header component if headerText does not meet your needs
 */
export interface CardProps {
  bordered?: string
  children: React.ReactNode
  className?: string
  cover?: React.ReactNode
  header?: React.ReactNode
  headerLine?: boolean
  headerText?: string
  ref?: React.Ref<HTMLDivElement>
  style?: React.CSSProperties
}
