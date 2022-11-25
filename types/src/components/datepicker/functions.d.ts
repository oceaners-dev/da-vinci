/**
 * Util functions
 */
/**
 * For formatting date
 * @param date
 */
export declare function formattedDate(date: Date): string;
/**
 * Beginning of Day of Week of a Month
 * @param date
 */
export declare function beginningDayOfWeek(m: number, y: number): number;
/**
 * Days in month
 */
export declare function daysInMonth(month: number, year: number): 31 | 29 | 28 | 30;
/**
 * Is Leap Year
 * @param year
 */
export declare function isLeapYear(year: number): boolean;
export declare const daysOfWeekNames: string[];
export declare const monthNames: string[];
