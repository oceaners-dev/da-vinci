import React from 'react';
declare type ViewState = 'date' | 'month' | 'year';
interface MonthYear {
    month: number;
    year: number;
}
interface DatepickerContextType {
    date: Date | null;
    isSelectedDate: (d: number) => boolean;
    isVisible: boolean;
    nextDecade: () => void;
    nextMonth: () => void;
    nextYear: () => void;
    prevDecade: () => void;
    prevMonth: () => void;
    prevYear: () => void;
    selectDate: (d: number) => void;
    selectMonth: (m: number) => void;
    selectYear: (y: number) => void;
    showCalendar: () => void;
    toggleCalendar: () => void;
    view: ViewState;
    viewMonths: () => void;
    viewYears: () => void;
    visible: MonthYear;
}
export declare const DatepickerCtx: React.Context<DatepickerContextType>;
export declare function useDatepickerCtx(date: Date, onChange: (d: Date) => void, ref: React.MutableRefObject<HTMLElement | undefined>): DatepickerContextType;
export {};
