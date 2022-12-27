import * as React from 'react'
import { useId } from 'react'
import { Card } from '../card-UNFINISHED/Card'
import { Portal } from '../portal/Portal'

// TODO: Add copy support
// TODO: stay open if hover over tooltip

export interface TooltipProps {
  children: React.ReactNode
  classNames?: {
    wrapper?: string
  }
  closeOnMouseLeave?: boolean // TODO: add closeOnMouseLeave to Tooltip
  content: React.ReactNode
  offset?: number
  position?: 'top' | 'bottom' | 'left' | 'right'
}

export interface TooltipCoordinates {
  bottom?: number
  left?: number
  right?: number
  top?: number
  transform?: string
}

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children, // ✅
  classNames = {
    wrapper: '', // ✅
  },
  content, // ✅
  offset,
  position = 'top',
}) => {
  const id = useId().replaceAll(':', '')
  const [isVisible, setIsVisible] = React.useState(false)
  const [displayAnimation, setDisplayAnimation] = React.useState<boolean>()
  const [coordinates, setCoordinates] = React.useState<TooltipCoordinates>()
  const [contentWidth, setContentWidth] = React.useState<number>(0)

  const ref = React.useRef<HTMLDivElement>(null)

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement

    const dimensions = target.getBoundingClientRect()

    const top = {
      left: dimensions.x + dimensions.width / 2, // add half the width of the button for centering
      top: dimensions.y + window.scrollY - offset, // add scrollY offset, as soon as getBountingClientRect takes on screen coords
      transform: 'translateX(-50%)',
    }

    const bottom = {
      left: dimensions.x + dimensions.width / 2, // add half the width of the button for centering
      top: dimensions.y + dimensions.height + offset,
      transform: 'translateX(-50%)',
    }
    const right = {
      left: dimensions.right + offset,
      top: dimensions.y + dimensions.height / 2,
      transform: 'translateY(-50%)',
    }

    const left = {
      left: dimensions.left - offset - contentWidth,
      top: dimensions.y + dimensions.height / 2, // add half the width of the
      transform: 'translateY(-50%)',
    }

    const coords = {
      top,
      bottom,
      right,
      left,
    }

    setCoordinates(coords[position])

    setIsVisible(true)
    setTimeout(() => {
      setContentWidth(
        document.getElementById('tooltip-' + id)
          ? document.getElementById('tooltip-' + id).getBoundingClientRect()
              .width
          : 0,
      )
      setDisplayAnimation(true)
    }, 100)
  }

  const handleMouseLeave = () => {
    setDisplayAnimation(false)
    setTimeout(() => {
      setIsVisible(false)
    }, 100)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsVisible(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  const animationClasses = `transition-all transform duration-300 `
  const lrClasses = `!max-w-[300px] !w-fit ` + animationClasses

  return (
    <div
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={handleMouseLeave}
    >
      {isVisible && (
        <Portal>
          <div
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={handleMouseLeave}
            id={'tooltip-' + id}
            style={{
              position: 'fixed',
              top: coordinates?.top,
              left: coordinates?.left,
              right: coordinates?.right,
              transform: coordinates?.transform,
            }}
            className={
              position === 'top'
                ? animationClasses +
                  (displayAnimation
                    ? 'opacity-1 bottom-2'
                    : 'opacity-0 bottom-0')
                : position === 'bottom'
                ? animationClasses +
                  (displayAnimation ? 'opacity-1 top-2 ' : 'opacity-0 top-0')
                : position === 'left'
                ? lrClasses +
                  (displayAnimation
                    ? 'opacity-1 right-3 '
                    : 'opacity-0 right-0 ')
                : lrClasses +
                  (displayAnimation ? 'opacity-1  left-3 ' : 'opacity-0 left-0')
            }
          >
            <Card
              className={'!px-2 !py-1 text-xs !w-max ' + classNames?.wrapper}
            >
              <div>{content}</div>
            </Card>
          </div>
        </Portal>
      )}

      {children}
    </div>
  )
}

Tooltip.defaultProps = {
  offset: 15,
  position: 'right',
  closeOnMouseLeave: true,
}

export { Tooltip }
