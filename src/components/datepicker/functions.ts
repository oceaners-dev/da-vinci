/**
 * Util functions
 */
/**
 * For formatting date
 * @param date
 */
export function formattedDate(date: Date): string {
  return `${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`
}

/**
 * Beginning of Day of Week of a Month
 * @param date
 */
export function beginningDayOfWeek(m: number, y: number): number {
  return new Date(y, m, 1).getDay()
}

/**
 * Days in month
 */
export function daysInMonth(month: number, year: number) {
  switch (month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31
    case 1:
      return isLeapYear(year) ? 29 : 28
    default:
      return 30
  }
}

/**
 * Is Leap Year
 * @param year
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export const daysOfWeekNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
