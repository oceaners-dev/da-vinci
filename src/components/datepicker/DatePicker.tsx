import React, { useRef, useContext, useState } from 'react'
import uuid from 'react-uuid'
import { useClickOutside } from '../../hooks'
import { SvgLeftArrow, SvgRightArrow } from '../../utils/svg'
import { Card } from '../card-UNFINISHED'
import { Input } from '../input'
import { Portal } from '../portal'
import { DatepickerCtx, useDatepickerCtx } from './DatepickerContext'
import {
  beginningDayOfWeek,
  daysInMonth,
  daysOfWeekNames,
  formattedDate,
  monthNames,
} from './functions'
import { SvgCalendarOutline } from './svg'

export const DatePicker: React.FC<DatePickerProps> = (props) => (
  <RawDatePicker
    date={props.date}
    onChange={props.onChange}
    portalAtMobile={props.portalAtMobile}
  />
)

export const RawDatePicker: React.FC<{
  date: Date
  onChange: (date: Date) => void
  /**
   * @default true
   * @description If true, the datepicker `will be rendered in a full screen portal` for better experience.
   */
  portalAtMobile?: boolean
}> = ({ date, onChange, portalAtMobile }) => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
  const clickRef = useClickOutside(() => setShowDatePicker(false))

  const popupNode = useRef<HTMLElement>()
  const ctxValue = useDatepickerCtx(date, onChange, popupNode)
  const calendarRef = useRef<HTMLDivElement>(null)

  return (
    <DatepickerCtx.Provider value={ctxValue}>
      <div className="w-fit relative h-fit" ref={clickRef}>
        <Input
          type="text"
          onFocus={() => {
            setShowDatePicker(true)
          }}
          value={
            date
              ? formattedDate(date)
              : calendarRef
              ? calendarRef.current
                ? formattedDate(calendarRef.current as unknown as Date) // TODO: Wroooong type definition.
                : ''
              : ''
          }
          readOnly
          rightIcon={
            <button
              className="flex items-center justify-center text-sm  text-gray-700 px-2 focus:outline-none"
              onClick={() => ctxValue.toggleCalendar()}
            >
              <SvgCalendarOutline className="w-5 h-5" color="#666" />
            </button>
          }
        />
        {showDatePicker && (
          <Calendar
            ref={calendarRef}
            calendarRef={clickRef}
            portalAtMobile={portalAtMobile}
          />
        )}
        {/* <Calendar ref={calendarRef} /> */}
      </div>
    </DatepickerCtx.Provider>
  )
}

RawDatePicker.defaultProps = {
  portalAtMobile: true,
}

interface CalendarProps {
  ref?: React.Ref<HTMLDivElement>
  /**
   * For closing the calendar when clicking outside at mobile
   */
  calendarRef?: React.Ref<HTMLDivElement>
  /**
   * @default true
   * @description If true, the datepicker `will be rendered in a full screen portal` for better experience.
   */
  portalAtMobile?: boolean
}

const Calendar: React.FC<CalendarProps> = React.forwardRef<
  HTMLDivElement,
  CalendarProps
>((props, ref) => {
  const { view } = useContext(DatepickerCtx)

  let selectionComponent = null
  switch (view) {
    case 'date':
      selectionComponent = <DateSelection />
      break
    case 'month':
      selectionComponent = <MonthSelection />
      break
    case 'year':
      selectionComponent = <YearSelection />
      break
  }

  const isMobile =
    navigator.userAgent.indexOf('iPhone') > 0 ||
    navigator.userAgent.indexOf('iPad') > 0 ||
    navigator.userAgent.indexOf('iPod') > 0 ||
    navigator.userAgent.indexOf('Android') > 0

  return isMobile && props.portalAtMobile ? (
    <Portal className="fixed inset-0 w-full h-full flex items-center justify-center bg-black/40 backdrop-blur-sm z-40">
      <Card
        className="bg-white w-fit shadow-lg max-w-xs !p-2 rounded-lg "
        ref={props.calendarRef}
      >
        {selectionComponent}
      </Card>
    </Portal>
  ) : (
    <Card
      className="bg-white absolute top-10 left-0 w-fit shadow-lg max-w-xs !p-2 rounded-lg "
      ref={props.calendarRef}
    >
      {selectionComponent}
    </Card>
  )
})

/**
 * Date Selection Component
 * @param props
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const DateSelection: React.FC<{}> = (props) => {
  const {
    nextMonth,
    prevMonth,
    viewMonths,
    viewYears,
    selectDate,
    visible: { month, year },
    isSelectedDate,
  } = useContext(DatepickerCtx)

  const dates = []

  for (let i = 0; i < beginningDayOfWeek(month, year); i++) {
    dates.push(<div key={`emptybefore${i}`} />)
  }

  for (let i = 1; i <= daysInMonth(month, year); i++) {
    dates.push(
      <button
        key={`day${i}`}
        className={`hover:bg-gray-200 rounded p-1 text-sm ${
          isSelectedDate(i) ? 'bg-gray-300 ' : ''
        }`}
        onClick={() => selectDate(i)}
        style={{ textAlign: 'center' }}
      >
        {i}
      </button>,
    )
  }

  return (
    <div
      className="text-gray-800"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '2rem auto',
        alignItems: 'stretch',
      }}
    >
      <button className={buttonClassName} onClick={(e) => prevMonth()}>
        <SvgLeftArrow
          className="w-5 h-5 stroke-current"
          style={{ strokeWidth: 0 }}
        />
      </button>

      <button
        className={`${buttonClassName} `}
        style={{ gridColumn: '2/5' }}
        onClick={(e) => viewMonths()}
      >
        {monthNames[month]}
      </button>

      <button
        className={`${buttonClassName} `}
        style={{ gridColumn: '5/7' }}
        onClick={(e) => viewYears()}
      >
        {year}
      </button>

      <button className={buttonClassName} onClick={(e) => nextMonth()}>
        <SvgRightArrow
          className="w-5 h-5 stroke-current"
          style={{ strokeWidth: 0 }}
        />
      </button>

      {daysOfWeekNames.map((day) => (
        <div
          key={(200 + day).toString()}
          className="p-1 text-sm "
          style={{ textAlign: 'center' }}
        >
          {day[0]}
        </div>
      ))}

      {dates}
    </div>
  )
}

/**
 * Month Selection Component
 * @param props
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const MonthSelection: React.FC<{}> = (props) => {
  const { viewYears, selectMonth, nextYear, prevYear, visible } =
    useContext(DatepickerCtx)

  return (
    <div
      className="h-48"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '2rem auto',
        alignItems: 'stretch',
      }}
    >
      <div className="flex" style={{ gridColumn: '1/5' }}>
        <CalButton chevron="left" onClick={(e) => prevYear()} />
        <CalButton className="flex-grow" onClick={(e) => viewYears()}>
          {visible.year}
        </CalButton>
        <CalButton chevron="right" onClick={(e) => nextYear()} />
      </div>

      {monthNames.map((month, index) => (
        <CalButton key={uuid()} onClick={(e) => selectMonth(index)}>
          {month.substring(0, 3)}
        </CalButton>
      ))}
    </div>
  )
}

/**
 * Year Selection Component
 * @param props
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const YearSelection: React.FC<{}> = (props) => {
  const {
    selectYear,
    prevDecade,
    nextDecade,
    visible: { year },
  } = useContext(DatepickerCtx)

  let years = []
  let [minYear, maxYear] = [year - 6, year + 6]

  for (let i = minYear; i < maxYear; i++) {
    years.push(<CalButton onClick={(e) => selectYear(i)}>{i}</CalButton>)
  }

  return (
    <div
      className="h-48"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '2rem auto',
        alignItems: 'stretch',
      }}
    >
      <div className="flex" style={{ gridColumn: '1/5' }}>
        <CalButton chevron="left" onClick={(e) => prevDecade()} />
        <CalButton className="flex-grow">
          {`${minYear} - ${maxYear - 1}`}
        </CalButton>
        <CalButton chevron="right" onClick={(e) => nextDecade()} />
      </div>

      {years}
    </div>
  )
}

const buttonClassName =
  'hover:bg-gray-200 rounded p-1 text-sm flex align-center justify-center focus:outline-none'

const CalButton: React.FC<{
  chevron?: 'right' | 'left'
  className?: string
  style?: React.StyleHTMLAttributes<HTMLButtonElement>
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children?: React.ReactNode
}> = (props) => {
  let children = null

  if (props.chevron && props.chevron === 'left')
    children = (
      <SvgLeftArrow
        className="w-5 h-5 stroke-current"
        style={{ strokeWidth: 0 }}
      />
    )
  else if (props.chevron && props.chevron === 'right')
    children = (
      <SvgRightArrow
        className="w-5 h-5 stroke-current"
        style={{ strokeWidth: 0 }}
      />
    )
  else children = props.children

  return (
    <button
      className={`${buttonClassName} ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      {children}
    </button>
  )
}

export interface DatePickerProps {
  date: Date
  onChange: (date: Date) => void
  /**
   * @default true
   * @description If true, the datepicker `will be rendered in a full screen portal` for better experience.
   */
  portalAtMobile?: boolean
}
