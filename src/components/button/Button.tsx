import React, { forwardRef, useEffect, useRef, useState } from 'react'
import chroma from 'chroma-js'
import { useMergedRef } from '../../hooks'

// TODO: Button's background color does not changewith useEffect
// TODO: Add `icon only`version to Button
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      btnType,
      children,
      icon,
      // isActive,
      isHoverStylesDisabled,
      className,
      ...rest
    } = props
    const btnRef = useRef<HTMLButtonElement>(null)

    // hooks
    const refs = useMergedRef(ref, btnRef)

    // states
    const [backgroundColorClass, setBackgroundColorClass] = useState<string>(``)
    const [textColor, setTextColor] = useState<string>(`text-white`)

    useEffect(() => {
      if (!btnType) return
      const colors = {
        primary: 'bg-dv-primary-base',
        secondary: 'bg-dv-secondary-base',
        positive: 'bg-dv-positive-base',
        negative: 'bg-dv-negative-base',
      }
      const color = colors[btnType]

      if (color) {
        setBackgroundColorClass(color)
      }
    }, [btnType])

    useEffect(() => {
      if (!btnRef.current || !backgroundColorClass || !window) return
      const element = btnRef.current
      const bgColor = window
        .getComputedStyle(element, null)
        .getPropertyValue('background-color')
      const isLight = (chroma(bgColor).luminance() as number) > 0.5

      setTextColor(isLight ? 'text-gray-800' : 'text-gray-50')

      if (!isHoverStylesDisabled) {
        const bgPalette = chroma.scale([bgColor, 'black']).colors(9)

        element.addEventListener('mouseenter', () => {
          element.style.backgroundColor = bgPalette[1]
        })

        element.addEventListener('mouseleave', () => {
          element.style.backgroundColor = bgColor
        })
      }
    }, [btnRef, backgroundColorClass, isHoverStylesDisabled])

    return (
      <button
        ref={refs}
        className={
          `py-2 flex flex-row items-center rounded justify-center text-xs w-fit ` +
          `${className} ${backgroundColorClass} ${textColor}`
        }
        {...rest}
      >
        {icon && (
          <div
            className={
              '[&>svg]:w-5 [&>svg]:h-5 leading-none ' +
              (children ? 'pl-2' : 'px-2')
            }
          >
            {icon}
          </div>
        )}
        {children && (
          <div className="w-full max-w-[150px] font-medium px-2">
            {children}
          </div>
        )}
      </button>
    )
  },
)

Button.defaultProps = {
  btnType: 'primary',
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Colour type of button.
   * @defaults 'primary'
   */
  btnType?: 'primary' | 'secondary' | 'negative' | 'positive'
  children?: React.ReactNode /* as prop can be Link or Button */
  className?:
    | React.HTMLAttributes<HTMLButtonElement>['className']
    | React.HTMLAttributes<HTMLAnchorElement>['className']
  icon?: React.ReactNode
  isActive?: boolean
  isHoverStylesDisabled?: boolean
  onClick?: React.HTMLAttributes<HTMLButtonElement>['onClick']
}
