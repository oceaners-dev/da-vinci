import React from 'react'

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { children, className } = props
    return (
      <div ref={ref} className={`card-classes ${className || ''}`}>
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
interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: React.HTMLAttributes<HTMLElement>['className']
  cover?: React.ReactNode
  hasBorders?: boolean
  headerText?: string
  headerLine?: boolean
  header?: React.ReactNode
  ref?: React.Ref<HTMLDivElement>
}
