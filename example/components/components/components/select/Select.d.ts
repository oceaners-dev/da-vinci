import React from 'react';
import { ForwardRefWithStaticComponents } from '../../utils/ts/forward-ref-with-static-component';
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
declare const OptionComponent: React.ForwardRefExoticComponent<Pick<Option, keyof Option> & React.RefAttributes<HTMLDivElement>>;
export interface SelectProps {
    /**
     * When `multiple` is false and `allowDeselect` is true, user can deselect the selected option.
     * @default true
     */
    allowDeselect?: boolean;
    /**
     * Is input has borders
     * @default false
     */
    bordered?: boolean;
    /**
     * You can find element's name at `data-name` attribute
     */
    classNames?: {
        dropdownWrapper?: string;
        label?: string;
        selectWrapper?: string;
    };
    /**
     * if true, users can deselect options at once or one by one
     * @defaults true
     */
    clearable?: boolean;
    /**
     * if true, dropdown closes after click. if `multiple` is true, dropdown stays open by default.
     */
    closeOnSelect?: boolean;
    creatable?: boolean;
    /**
     * You can pass default selected values. If `multiple` is false, you can pass only one value. Otherwise, we will take `first value`.
     */
    customOptionComponent?: React.ComponentType<Option>;
    defaultSelectedValues?: Option[];
    /**
     * if true, Select will be unclickable
     */
    disabled?: boolean;
    /**
     * if you want to make dropdown position static, you can use this prop
     * @defaults 'auto'
     */
    dropdownPosition?: 'top' | 'bottom' | 'auto';
    /**
     * Custom search/filter logic for options. `searchable` prop must be true.
     */
    filter?: (value: string, option: Option) => boolean;
    /**
     * for group options
     */
    groups?: {
        id: string;
        title: string;
    };
    /**
     * A tiny description for the Select input. Will be display under the label.
     */
    helperText?: string;
    /**
     * if true, selected elements will be removed from dropdown
     * @defaults false
     */
    hideSelectedOptions?: boolean;
    /**
     * If true, dropdown is open by default.
     * @defaults false
     */
    initiallyOpen?: boolean;
    /**
     * A title for the Select input. Will be display at the top of the Select element.
     */
    label?: string;
    /**
     * if true, users can select multiple options
     */
    multiple?: boolean;
    onChange?: (value?: Option[]) => void;
    /**
     * gives you the information about the current state of the dropdown
     */
    onDropdownToggle?: () => void;
    options: Option[];
    /**
     * Adds an `asterisk` to the label
     */
    required?: boolean;
    /**
     * Adds a search input to the dropdown
     * @defaults false
     */
    searchable?: boolean;
    /**
     * if true, arrow icon at the right side will be hidden
     */
    withoutDropdownIcon?: boolean;
    /**
     * @see classNames.dropdownWrapper
     * You can add classNames with `classNames.dropdownWrapper` for dropdown wrapper
     */
    zIndex?: number;
}
export interface Option {
    [key: string]: any;
    label: string;
    value: string;
}
export declare type SelectComponent = ForwardRefWithStaticComponents<SelectProps, {
    Option: typeof OptionComponent;
}>;
export {};
