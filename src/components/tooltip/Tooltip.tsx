import * as React from 'react'
import { Card } from '../card-UNFINISHED/Card'

// TODO: stay open if hover over tooltip
export interface TooltipProps {
  children: React.ReactNode
  classNames?: {
    wrapper?: string
  }
  content: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children, // ✅
  classNames = {
    wrapper: '', // ✅
  },
  content, // ✅
  position = 'top', // 🚨 TODO: center top/bottom tooltips
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [displayAnimation, setDisplayAnimation] = React.useState<boolean>()

  const ref = React.useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    setIsVisible(true)
    setTimeout(() => {
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

  return (
    <div
      ref={ref}
      className={
        'w-fit relative ' +
        (position === 'top' || position === 'bottom'
          ? ' flex flex-col'
          : ' flex row')
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-0">
        {position === 'top' && isVisible && (
          <div
            className={
              `absolute bottom-2 transition-all transform duration-300 ` +
              (displayAnimation ? 'opacity-1' : 'opacity-0')
            }
          >
            <Card
              className={
                classNames?.wrapper + ' max-w-[300px] w-fit !px-2 !py-1 text-xs'
              }
            >
              {content}
            </Card>
          </div>
        )}
      </div>
      {position === 'left' && isVisible && (
        <div className="relative h-auto w-0 flex">
          <div
            className={
              `absolute bottom-1/2 translate-y-1/2 right-3 transition-all transform duration-300 ` +
              (displayAnimation ? 'opacity-1' : 'opacity-0')
            }
          >
            <Card className={classNames?.wrapper + ' w-[300px]'}>
              {content}
            </Card>
          </div>
        </div>
      )}
      {children}
      {position === 'right' && isVisible && (
        <div className="relative h-auto w-0 flex">
          <div
            className={
              `absolute bottom-1/2 translate-y-1/2 left-3 transition-all transform duration-300 ` +
              (displayAnimation ? 'opacity-1' : 'opacity-0')
            }
          >
            <Card className={classNames?.wrapper + ' w-[300px]'}>
              {content}
            </Card>
          </div>
        </div>
      )}
      <div className="relative h-0">
        {position === 'bottom' && isVisible && (
          <div
            className={
              `absolute top-2 transition-all transform duration-300 ` +
              (displayAnimation ? 'opacity-1' : 'opacity-0')
            }
          >
            <Card className={classNames?.wrapper + ' w-[300px]'}>
              {content}
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export { Tooltip }
