import React from 'react';
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
    /**
     * @description className for `<input>` directly.
     * @type {React.HTMLAttributes<HTMLInputElement>['className']}
     * @memberof InputProps
     *
     */
    className?: React.HTMLAttributes<HTMLInputElement>['className'];
    defaultValue?: string;
    /**
     * @description If you need to hide the input, you can use this prop. But `think again`. Probably you are doing something `wrong`.
     */
    readonly hideInput?: boolean;
    leftComponent?: React.ReactNode;
    /**
     * You can pass a React component or string
     */
    leftIcon?: JSX.Element;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    password?: boolean;
    /**
     * You can pass a React component or string
     */
    rightIcon?: JSX.Element | null;
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
