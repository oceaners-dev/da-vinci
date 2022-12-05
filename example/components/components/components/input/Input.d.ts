import React from 'react';
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
    /**
     * Is input has borders
     * @default false
     */
    bordered?: boolean;
    /**
     *  className for `<input>` directly.
     * @type {React.HTMLAttributes<HTMLInputElement>['className']}
     * @memberof InputProps
     *
     */
    className?: React.HTMLAttributes<HTMLInputElement>['className'];
    defaultValue?: string;
    /**
     * Disables translate-y animation for input
     */
    disableMoving?: boolean;
    disabled?: boolean;
    /**
     * Display a informative small text above input
     */
    helperText?: string;
    /**
     * If you need to hide the input, you can use this prop. But `think again`. Probably you are doing something `wrong`.
     */
    readonly hideInput?: boolean;
    /**
     * Text label for input
     */
    label?: string;
    labelLeft?: string;
    /**
     * The placeholder becomes a label
     */
    labelPlaceholder?: string;
    labelRight?: string;
    /**
     * If you want to add a component to the left of the input, you can use this prop. We don't set `overflow hidden` for Input's wrapper. So if your component overflows, you can use `wrapperClasses` prop to set `overflow-hidden` for wrapper.
     */
    leftComponent?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    password?: boolean;
    /**
     * If you want to add a component to the left of the input, you can use this prop. We don't set `overflow hidden` for Input's wrapper. So if your component overflows, you can use `wrapperClasses` prop to set `overflow-hidden` for wrapper.
     */
    rightComponent?: React.ReactNode;
    /**
     * @default false
     * Fully rounded input borders
     */
    rounded?: boolean;
    /**
     * Show clear button at right side of input when it's not empty.
     * @default true
     */
    showClear?: boolean;
    /**
     * If you want to add classes for size prop, use `className` prop with `data-[size=*]` selector. Eg: `data-[size=large]:px-10`
     * @type {('small' | 'default' | 'large')}
     * @memberof InputProps
     */
    sizing?: 'small' | 'default' | 'large';
    /**
     * className for parent div
     */
    wrapperClasses?: string;
    wrapperOnClick?: () => void;
}
