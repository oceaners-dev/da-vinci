import React from 'react';
export declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface CheckboxGroupProps {
    children: React.ReactNode;
    /**
     * The default value of the checkbox group.
     * This value overrides the default value of the checkbox.
     */
    defaultValue?: {
        name: string;
        value: boolean;
    }[];
    description?: React.ReactNode;
    label?: React.ReactNode;
    listClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
    onChange?: (value: {
        name: string;
        value: boolean;
    }[]) => void;
    /**
     * If vertical, gap is 2px. If horizontal, gap is 4.
     */
    orientation?: 'horizontal' | 'vertical';
    required?: boolean;
}
