import React from 'react'
import { dvStyles } from '../../utils/styles'
import { RadiusVariants, shadowVariants } from '../../utils/types'
import { Title } from '../title/Title'

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { children, bordered, shadow, radius, title, className, ...rest } =
      props

    return (
      <div
        ref={ref}
        className={`card-classes flex flex-col text-dv-text-01 ${
          className || ''
        } ${bordered ? '' : '!outline-none'}`}
        style={{
          ...rest.style,
          ...dvStyles({ radius, shadow }),
        }}
        {...rest}
      >
        {title && <Title level={4} text={title} className="pb-dv-baseTight" />}
        {children}
      </div>
    )
  },
)

Card.defaultProps = {
  bordered: true,
  radius: 'medium',
}

/**
 * @param children - The content of the card.
 * @param className - The class name of the card.
 * @param cover - The cover of the card. It is a ReactNode. It will "cover" the card completely
 * @param bordered - The card has borders or not. Default is `true`.
 * @param title - The header text of the card.
 * @param headerLine - The line under header title. Default is `true`.
 * @param headerRight - The right side of the header. It is a ReactNode.
 * @param header - Header component if title does not meet your needs
 */
export interface CardProps {
  bordered?: boolean // ✅
  children: React.ReactNode // ✅
  className?: string // ✅
  cover?: React.ReactNode
  header?: React.ReactNode
  headerLine?: boolean
  radius?: RadiusVariants
  shadow?: shadowVariants // ✅
  style?: React.CSSProperties // ✅
  title?: string // ✅
}
