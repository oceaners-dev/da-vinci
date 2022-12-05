import React from 'react';
/**
 * @param {string} defaultValue - default value of the input
 * @param {boolean} withIcon- displays clock at the end of the input
 * @description - Don't forget to define a width for the input for preventing the input from expanding
 */
export declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps & React.RefAttributes<HTMLInputElement>>;
export interface TimePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * @description Eg. `"14:30"`
     */
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * @description Adds clock icon to the right side of the input
     */
    withIcon?: boolean;
}
