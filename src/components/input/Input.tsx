import { useEvent } from 'oceaners-hooks'
import React, { useEffect, useId, useRef, useState } from 'react'
import { useMergedRef } from '../../hooks'
import { dvStyles } from '../../utils/styles'
import { SvgClear, SvgEyeOff, SvgEyeOn } from '../../utils/svg'
import { RadiusVariants, shadowVariants } from '../../utils/types'

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    // TODO: Add colors
    const inputRef = React.useRef<HTMLInputElement>(null)
    const {
      bordered, // ✅
      className, // ✅
      disabled, // 🚨 TODO: finish this
      disableMoving, // ✅
      sizing: size, // 🚨
      labelLeft, // ✅
      labelRight, // ✅
      helperText, // ✅
      password, // ✅
      onChange, // ✅
      hideInput, // 🚨
      radius, // ✅
      rightIcon, // 🚨
      shadow, // ✅
      showClear, // ✅
      leftComponent, // ✅
      rightComponent, // ✅
      label, // ✅
      labelPlaceholder, // ✅
      wrapperClasses, // ✅
      wrapperOnClick,
      ...rest
    } = props

    const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true)
    const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true)

    const inputId = useId()

    const inputRefs = useMergedRef(inputRef, ref)
    useEffect(() => {
      if (!inputRef.current) return

      const listener = (e: Event) => {
        const inputValue = (e.target! as HTMLInputElement).value
        setIsInputEmpty(inputValue === '')
      }
      inputRef.current.addEventListener('input', listener)
    }, [inputRef])

    const renderLabelBox = (position: 'left' | 'right', label: string) => (
      <div
        className={
          'flex h-full w-fit items-center justify-center px-3 text-gray-400 ' +
          (bordered ? ' bg-white' : ' bg-gray-300')
          // +
          // (position === 'left'
          //   ? rounded
          //     ? ' rounded-l-full'
          //     : ' rounded-l-lg'
          //   : rounded
          //   ? ' rounded-r-full'
          //   : ' rounded-r-lg')
        }
      >
        {label}
      </div>
    )

    const renderComponentBox = (component: React.ReactNode) => component

    const [isInputActive, setIsInputActive] = useState<boolean>(false)

    const focusRef = useRef(null)
    useEvent(
      'click',
      () => {
        setIsInputActive(true)
        inputRef.current?.focus()
      },
      focusRef,
    )

    return (
      <div
        className={'relative box-border inline-flex h-auto flex-col gap-[6px]'}
        onClick={wrapperOnClick}
      >
        <div
          className={
            'relative box-border flex w-fit flex-row items-center ' +
            ' transform text-sm transition duration-200 ' +
            (disableMoving ? '' : ' focus-within:-translate-y-[2px] ') +
            (wrapperClasses ? ' ' + wrapperClasses : '') +
            (bordered
              ? ' bg-white outline outline-gray-300 focus-within:outline-gray-400 hover:outline-gray-400'
              : ' bg-gray-200') +
            (disabled ? ' cursor-not-allowed text-gray-400' : '')
          }
          style={{
            ...dvStyles({ radius, shadow }),
          }}
        >
          {labelPlaceholder && (
            <label
              htmlFor={inputId}
              className={
                'absolute left-3 -translate-y-1/2 transform text-gray-500 transition-all duration-150 ' +
                (isInputActive ? ' -top-4 text-black' : ' top-1/2 ')
              }
            >
              {labelPlaceholder}
            </label>
          )}
          {/* click helper */}
          <div
            ref={focusRef}
            data-name="click-helper"
            className="absolute top-0 left-0 box-border h-full w-full"
          />

          {labelLeft && !leftComponent && renderLabelBox('left', labelLeft)}
          {leftComponent && !password && renderComponentBox(leftComponent)}
          {label && (
            <label
              htmlFor={inputId}
              className="absolute left-3 -top-5 text-xs font-light"
            >
              {label}
            </label>
          )}
          <input
            id={inputId}
            aria-labelledby={inputId}
            ref={inputRefs}
            disabled={disabled}
            // autoFocus={isFocused}
            // onFocus={() => {
            //   setIsInputActive(true)
            // }}
            // onBlur={() => {
            //   setIsInputActive(false)
            // }}
            className={
              'relative z-20 box-border h-full w-fit bg-transparent py-2  pl-4 outline-none outline-0 outline-offset-0 ' +
              (className ? ' ' + className : '') +
              (disabled ? ' pointer-events-none' : '')
            }
            onChange={onChange}
            type={
              password ? (isPasswordHidden ? 'password' : 'text') : rest.type
            }
            {...rest}
          />

          {/* clear button */}
          {!labelLeft && !labelRight && (
            <button
              className={
                'z-30 inline-flex h-auto w-auto transform px-2 transition-all duration-150 [&>svg]:z-20 [&>svg]:inline-flex [&>svg]:w-3 ' +
                (!rightIcon && isInputEmpty
                  ? ' invisible opacity-0'
                  : ' visible opacity-100') +
                (rightComponent
                  ? ' relative'
                  : ' absolute top-1/2 right-0 -translate-y-1/2 ')
              }
              onClick={() => {
                inputRef.current!.value = ''
                setIsInputEmpty(true)
              }}
            >
              {rightIcon ? (
                rightIcon
              ) : showClear ? (
                <SvgClear className="relative z-20 inline-flex h-full w-3" />
              ) : (
                ''
              )}
            </button>
          )}

          {password && (
            <button
              className="box-border block h-full w-fit pr-4"
              onClick={() => {
                setIsPasswordHidden(!isPasswordHidden)
              }}
            >
              {isPasswordHidden ? (
                <SvgEyeOff className="relative z-20 h-full w-4" />
              ) : (
                <SvgEyeOn className="relative z-20 h-full w-4" />
              )}
            </button>
          )}

          {labelRight &&
            !rightComponent &&
            !password &&
            renderLabelBox('right', labelRight)}
          {rightComponent && !password && renderComponentBox(rightComponent)}

          {helperText && (
            <div className="absolute left-3 -bottom-5 text-[10px] font-light">
              {helperText}
            </div>
          )}
        </div>
      </div>
    )
  },
)

Input.defaultProps = {
  bordered: false,
  radius: 'medium',
  showClear: true,
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  /**
   * Is input has borders
   * @default false
   */
  bordered?: boolean
  /**
   *  className for `<input>` directly.
   * @type {React.HTMLAttributes<HTMLInputElement>['className']}
   * @memberof InputProps
   *
   */
  className?: React.HTMLAttributes<HTMLInputElement>['className']
  defaultValue?: string
  /**
   * Disables translate-y animation for input
   */
  disableMoving?: boolean
  disabled?: boolean
  /**
   * Display a informative small text above input
   */
  helperText?: string
  /**
   * If you need to hide the input, you can use this prop. But `think again`. Probably you are doing something `wrong`.
   */
  readonly hideInput?: boolean
  /**
   * Text label for input
   */
  label?: string
  labelLeft?: string
  /**
   * The placeholder becomes a label
   */
  labelPlaceholder?: string
  labelRight?: string
  /**
   * If you want to add a component to the left of the input, you can use this prop. We don't set `overflow hidden` for Input's wrapper. So if your component overflows, you can use `wrapperClasses` prop to set `overflow-hidden` for wrapper.
   */
  leftComponent?: React.ReactNode

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  password?: boolean
  radius?: RadiusVariants
  /**
   * If you want to add a component to the left of the input, you can use this prop. We don't set `overflow hidden` for Input's wrapper. So if your component overflows, you can use `wrapperClasses` prop to set `overflow-hidden` for wrapper.
   */
  rightComponent?: React.ReactNode
  /**
   * If you add a icon to right side, clear button will be deactivated.
   */
  rightIcon?: React.ReactNode
  shadow?: shadowVariants
  /**
   * Show clear button at right side of input when it's not empty.
   * @default true
   */
  showClear?: boolean
  /**
   * If you want to add classes for size prop, use `className` prop with `data-[size=*]` selector. Eg: `data-[size=large]:px-10`
   * @type {('small' | 'default' | 'large')}
   * @memberof InputProps
   */
  sizing?: 'small' | 'default' | 'large'
  /**
   * className for parent div
   */
  wrapperClasses?: string
  wrapperOnClick?: () => void
}
