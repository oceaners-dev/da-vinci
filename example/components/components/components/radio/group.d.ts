import React from 'react';
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface RadioGroupProps {
    children: React.ReactNode;
    /**
     * The default value of the Radio group.
     * This value overrides the default value of the Radio.
     */
    defaultValue?: {
        name: string;
        value: boolean;
    }[];
    description?: React.ReactNode;
    label?: React.ReactNode;
    listClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
    /**
     * @description `HTML name attribute` for radio inputs.
     */
    name: string;
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
