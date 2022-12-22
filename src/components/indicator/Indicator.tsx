import * as React from 'react'
import { Text } from '../text/Text'

// TODO: render Indicator at portal
export interface IndicatorProps {
  /**
   * Adds a white border to the indicator
   */
  bordered?: boolean
  children: React.ReactNode
  classNames?: {
    /**
     * It's empty dot. If you want to add classes to value or value's background, use `value` prop.
     */
    dot?: string
    indicator?: string
    value?: string
    wrapper?: string
  }
  position?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'bottom-left'
    | 'top-right'
    | 'bottom-right'
  /**
   * If true, the indicator will be fully rounded.
   * @default true
   */
  rounded?: string | boolean
  value?: string | number
}

const Indicator: React.FC<IndicatorProps> = ({
  bordered,
  children,
  value,
  classNames = {
    dot: '',
    indicator: '',
    value: '',
    wrapper: '',
  },
  rounded,
  position,
}) => {
  // classes start
  let containerClasses = `w-fit h-fit absolute rounded-full ${classNames.indicator}`
  if (position === 'top') {
    containerClasses += ' top-0 left-1/2 '
  } else if (position === 'bottom') {
    containerClasses += ' bottom-0 left-1/2 '
  } else if (position === 'left') {
    containerClasses += ' left-0 '
  } else if (position === 'right') {
    containerClasses += ' right-0 top-1/2'
  } else if (position === 'top-left') {
    containerClasses += ' top-0 left-0'
  } else if (position === 'bottom-left') {
    containerClasses += ' bottom-0 left-0 top-1/2  '
  } else if (position === 'top-right') {
    containerClasses += ' top-0 right-0'
  } else if (position === 'bottom-right') {
    containerClasses += ' bottom-0 right-0 translate-x-1/2 translate-y-1/2'
  }

  if (
    position === 'bottom' ||
    position === 'bottom-left' ||
    position === 'left'
  ) {
    containerClasses += ' -translate-x-1/2 translate-y-1/2 '
  }

  if (position === 'top' || position === 'left' || position === 'top-left') {
    containerClasses += ' -translate-x-1/2 -translate-y-1/2 '
  }

  if (position === 'right' || position === 'top-right') {
    containerClasses += ' translate-x-1/2 -translate-y-1/2 '
  }

  const roundClasses = typeof rounded === 'boolean' ? 'rounded-full' : rounded
  const borderClasses = bordered ? ' outline outline-white ' : ''
  // classes end

  return (
    <div className={'relative w-fit ' + classNames.wrapper} data-tag="wrapper">
      <div data-tag="indicator" className={containerClasses}>
        {value !== undefined ? (
          <Text
            className={
              'bg-blue-400 text-white min-w-[16px] min-h-[16px]  flex justify-center items-center py-[1px] px-[4px] ' +
              roundClasses +
              ' ' +
              borderClasses +
              classNames.value
            }
            data-tag="value"
            size="xs"
          >
            {value.toString()}
          </Text>
        ) : (
          <div
            data-tag="dot"
            className={
              'h-full w-full bg-gray-500 rounded-full ' + classNames.dot
            }
          />
        )}
      </div>
      {children}
    </div>
  )
}

Indicator.defaultProps = {
  position: 'top-right',
  rounded: true,
}

export { Indicator }
