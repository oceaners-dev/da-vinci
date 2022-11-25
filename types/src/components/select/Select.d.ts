import React, { ReactNode } from 'react';
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLInputElement>>;
export interface SelectProps {
    clearable?: boolean;
    closeOnEsc?: boolean;
    creatable?: boolean;
    /**
     * @param data - data to be displayed in the dropdown
     * @description If you want to pass array of objects, `label` and `value` params are required.
     */
    data: SingleSelect[] | string[];
    /**
     * @param defaultValue - default value of the select
     * @description If you want to pass array of objects, `label` and `value` params are required. Otherwise, you can pass array strings.
     * @description If you want to `pass multiple values`, you need to pass `multiple` prop as `true`. Otherwise, it will be overridden on select.
     */
    defaultValue?: string[] | SingleSelect[];
    description?: ReactNode;
    disabled?: boolean;
    /**
     * @description the dropdown's z-index. Useful if you have another relative/absolute elements on the page.
     * @default z-20
     */
    dropdownZIndex?: React.HTMLAttributes<HTMLInputElement>['className'];
    filter?: (value: string, item: SingleSelect) => boolean;
    /**
     * @description whether the dropdown is opened by default
     * @default false.
     */
    initiallyOpened?: boolean;
    itemComponent?: ReactNode;
    label?: ReactNode;
    leftIcon?: JSX.Element;
    /**
     * @description max height of the dropdown
     * @default max-h-[200px]
     */
    maxDropdownHeight?: string;
    multiple?: boolean;
    onChange?: (value: string | string[] | SingleSelect | SingleSelect[]) => void;
    onSearchChange?: (query: string) => void;
    placeholder?: string;
    searchValue?: string;
    searchable?: boolean;
    size?: 'small' | 'medium' | 'large';
    withAsterisk?: boolean;
}
export interface SingleSelect {
    [key: string]: any;
    label: string;
    value: string;
}
