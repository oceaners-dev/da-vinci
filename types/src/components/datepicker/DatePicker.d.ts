import React from 'react';
export interface DatePickerProps {
    date: Date;
    onChange: (date: Date) => void;
    /**
     * @default true
     * @description If true, the datepicker `will be rendered in a full screen portal` for better experience.
     */
    portalAtMobile?: boolean;
}
export declare const RawDatePicker: React.FC<{
    date: Date;
    onChange: (date: Date) => void;
    /**
     * @default true
     * @description If true, the datepicker `will be rendered in a full screen portal` for better experience.
     */
    portalAtMobile?: boolean;
}>;
export declare const DatePicker: React.FC<DatePickerProps>;
