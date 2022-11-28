import React, { useEffect, useState } from 'react';
import { useMergedRef } from '../../hooks';
import { SvgClear, SvgEyeOff, SvgEyeOn } from '../../utils/svg';
import { useId } from 'react-aria';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    // TODO: Add colors
    const inputRef = React.useRef<HTMLInputElement>(null);
    const {
      bordered, // ✅
      className, // ✅
      disabled, // 🚨 TODO: finish this
      sizing: size, // 🚨
      labelLeft, // ✅
      labelRight, // ✅
      helperText, // ✅
      password, // ✅
      onChange, // ✅
      hideInput, // 🚨
      showClear, // ✅
      leftComponent, // ✅
      rightComponent, // ✅
      label, // ✅
      labelPlaceholder, // ✅
      rounded, // ✅
      wrapperClasses, // ✅
      ...rest
    } = props;

    const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
    const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);
    const [isInputActive, setIsInputActive] = useState<boolean>(false);

    const inputId = useId();

    const inputRefs = useMergedRef(inputRef, ref);
    useEffect(() => {
      if (!inputRef.current) return;

      const listener = (e: Event) => {
        const inputValue = (e.target! as HTMLInputElement).value;
        setIsInputEmpty(inputValue === '');
      };
      inputRef.current.addEventListener('input', listener);
    }, [inputRef]);

    const renderLabelBox = (position: 'left' | 'right', label: string) => (
      <div
        className={
          'h-full w-fit flex items-center justify-center px-3 text-gray-400 ' +
          (bordered ? ' bg-white' : ' bg-gray-300') +
          (position === 'left'
            ? rounded
              ? ' rounded-l-full'
              : ' rounded-l-lg'
            : rounded
            ? ' rounded-r-full'
            : ' rounded-r-lg')
        }
      >
        {label}
      </div>
    );

    const renderComponentBox = (component: React.ReactNode) => (
      <div className={'h-full w-fit flex items-center justify-center'}>
        {component}
      </div>
    );

    // append a parent div to this function if there is a label

    return (
      <div
        className={
          'w-fit h-auto inline-flex box-border relative gap-[6px] flex-col'
        }
      >
        {label && (
          <label htmlFor={inputId} className="text-sm">
            {label}
          </label>
        )}
        <div
          className={
            'relative h-[40px] w-fit flex flex-row items-center box-border ' +
            inputClasses +
            (rounded ? ' rounded-full' : ' rounded-lg') +
            (wrapperClasses ? ' ' + wrapperClasses : '') +
            (bordered
              ? ' bg-white outline outline-gray-300 focus-within:outline-gray-400 hover:outline-gray-400'
              : ' bg-gray-200') +
            (disabled ? ' text-gray-400 cursor-not-allowed' : '')
          }
        >
          {labelPlaceholder && (
            <label
              htmlFor={inputId}
              className={
                'absolute -translate-y-1/2 text-gray-500 transform transition-all duration-150 left-3 ' +
                (isInputActive ? ' -top-4 text-black' : ' top-1/2 ')
              }
            >
              {labelPlaceholder}
            </label>
          )}
          {/* click helper */}
          <div
            data-name="click-helper"
            className="h-full w-full absolute top-0 left-0 box-border z-10"
            onClick={() => {
              inputRef.current?.focus();
            }}
          />

          {labelLeft && !leftComponent && renderLabelBox('left', labelLeft)}
          {leftComponent && !password && renderComponentBox(leftComponent)}

          <input
            id={inputId}
            aria-labelledby={inputId}
            ref={inputRefs}
            disabled={disabled}
            onFocus={() => {
              setIsInputActive(true);
            }}
            onBlur={() => {
              setIsInputActive(false);
            }}
            className={
              'relative z-20 w-fit h-full outline-none outline-0 outline-offset-0 bg-transparent pl-4' +
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
          {!labelLeft && !labelRight && showClear && (
            <button
              className={
                'inline-flex h-auto w-auto px-2 transform transition-all duration-150 z-30 ' +
                (isInputEmpty
                  ? ' invisible opacity-0'
                  : ' visible opacity-100') +
                (rightComponent
                  ? ' relative'
                  : ' absolute top-1/2 right-0 -translate-y-1/2 ')
              }
              onClick={() => {
                inputRef.current!.value = '';
                setIsInputEmpty(true);
              }}
            >
              <SvgClear className="h-full w-3 relative z-20 inline-flex" />
            </button>
          )}

          {password && (
            <button
              className="box-border h-full w-fit pr-4 block"
              onClick={() => {
                setIsPasswordHidden(!isPasswordHidden);
              }}
            >
              {isPasswordHidden ? (
                <SvgEyeOff className="h-full w-4 relative z-20" />
              ) : (
                <SvgEyeOn className="h-full w-4 relative z-20" />
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
    );
  },
);

Input.defaultProps = {
  showClear: true,
  rounded: false,
};

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  /**
   * @default false
   * @description Is input has borders
   */
  bordered?: boolean;
  /**
   * @description className for `<input>` directly.
   * @type {React.HTMLAttributes<HTMLInputElement>['className']}
   * @memberof InputProps
   *
   */
  className?: React.HTMLAttributes<HTMLInputElement>['className'];
  defaultValue?: string;
  disabled?: boolean;
  /**
   * @description Display a informative small text above input
   */
  helperText?: string;
  /**
   * @description If you need to hide the input, you can use this prop. But `think again`. Probably you are doing something `wrong`.
   */
  readonly hideInput?: boolean;
  /**
   * @description Text label for input
   */
  label?: string;
  labelLeft?: string;
  /**
   * @description The placeholder becomes a label
   */
  labelPlaceholder?: string;
  labelRight?: string;
  /**
   * @description If you want to add a component to the left of the input, you can use this prop. We don't set `overflow hidden` for Input's wrapper. So if your component overflows, you can use `wrapperClasses` prop to set `overflow-hidden` for wrapper.
   */
  leftComponent?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  password?: boolean;
  /**
   * @description If you want to add a component to the left of the input, you can use this prop. We don't set `overflow hidden` for Input's wrapper. So if your component overflows, you can use `wrapperClasses` prop to set `overflow-hidden` for wrapper.
   */
  rightComponent?: React.ReactNode;
  /**
   * @default false
   * @description Fully rounded input borders
   */
  rounded?: boolean;
  /**
   * @default true
   * @description Show clear button at right side of input when it's not empty.
   */
  showClear?: boolean;
  /**
   * @description If you want to add classes for size prop, use `className` prop with `data-[size=*]` selector. Eg: `data-[size=large]:px-10`
   * @type {('small' | 'default' | 'large')}
   * @memberof InputProps
   */
  sizing?: 'small' | 'default' | 'large';
  /**
   * @description className for parent div
   */
  wrapperClasses?: string;
}

const inputClasses =
  'focus-within:-translate-y-[2px] transform transition duration-200 text-sm';
