import React, { useEffect, useRef, useState } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { SvgClear, SvgEyeOff, SvgEyeOn } from '../../utils/svg'
import Space from '../space'
import { renderDefaultIcon } from './render-default-icon'
import { renderUserInputIcon } from './render-param-icon'

// TODO: add leftComponent and rightComponent
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      className,
      size,
      leftIcon,
      rightIcon,
      password,
      showClear,
      leftComponent,
      ...rest
    } = props
    const [isActive, setIsActive] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const clickTracker = useClickOutside(() => setIsActive(false))

    return (
      <div
        ref={ref}
        className={
          'w-fit relative flex flex-row items-center justify-between input-classes cursor-text' +
          ' ' +
          `${isActive ? 'hover:!bg-gray-200 !outline-gray-300' : ''} 
    `
        }
      >
        <div
          className="absolute inset-0 z-0 w-full h-full"
          onClick={() => {
            clickTracker.current.focus()
          }}
        />

        {leftIcon && renderUserInputIcon('before', leftIcon)}
        {leftComponent && leftComponent}
        {leftComponent && <Space direction="horizontal" spacing={10} />}

        <input
          onFocus={() => setIsActive(true)}
          autoFocus={isActive}
          ref={clickTracker}
          data-size={size}
          type={password ? (showPassword ? 'text' : 'password') : 'text'}
          className={
            'data-[size=large]:!py-3 data-[size=small]:!py-0 relative bg-transparent outline-none border-none pointer-events-auto z-10' +
            ' ' +
            `${className || ''} ${props.disabled ? 'text-gray-600' : ''}`
          }
          {...rest}
        />

        {rightIcon && renderUserInputIcon('after', rightIcon)}

        {showClear &&
          renderDefaultIcon(
            <button
              onClick={() => {
                clickTracker.current.value = ''
                clickTracker.current.focus()
              }}
            >
              <SvgClear className="w-5 h-5" />
            </button>,
          )}

        {password &&
          (showPassword
            ? renderDefaultIcon(
                <button
                  className="relative z-20"
                  onClick={() => {
                    setShowPassword(false)
                    clickTracker.current.type === 'password'
                  }}
                >
                  <SvgEyeOn className="w-5 h-5" />
                </button>,
              )
            : renderDefaultIcon(
                <button
                  className="relative z-20"
                  onClick={() => {
                    setShowPassword(true)
                    clickTracker.current.type === 'text'
                  }}
                >
                  <SvgEyeOff className="w-5 h-5" />
                </button>,
              ))}
      </div>
    )
  },
)

Input.defaultProps = {
  size: 'default',
}

interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'rightIcon'
  > {
  defaultValue?: string
  className?: React.HTMLAttributes<HTMLInputElement>['className']
  size?: 'small' | 'default' | 'large'
  /**
   * You can pass a React component or string
   */
  leftIcon?: JSX.Element
  /**
   * You can pass a React component or string
   */
  rightIcon?: JSX.Element
  showClear?: boolean
  leftComponent?: React.ReactNode
  password?: boolean
}
