import { useWindowScroll } from 'oceaners-hooks'
import React, { useEffect, useState } from 'react'
import { Portal } from '../portal/Portal'

export interface AffixProps {
  children?: React.ReactNode
  /**
   * The y position of the affix when it is shown. Default is 30.
   */
  displayPosition?: number
  position?: {
    bottom?: number
    left?: number
    right?: number
    top?: number
  }
  /**
   * If true, on click to children, the page will scroll to top.
   */
  scrollToTopOnClick?: boolean
  target?: HTMLElement
  zIndex?: number
}

const Affix: React.FunctionComponent<AffixProps> = (props) => {
  const {
    children, // ✅
    displayPosition, // ✅
    scrollToTopOnClick, // ✅
    position, // ✅
    target, // ✅
    zIndex, // ✅
  } = props

  const _position = position || {
    bottom: 20,
    right: 20,
  }

  const _children = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // @ts-ignore
        onClick: () => {
          if (scrollToTopOnClick) {
            window.scrollTo({
              behavior: 'smooth',
              top: 0,
            })
          }
          child.props.onClick && child.props.onClick()
        },
      })
    }
    return child
  })

  const { y } = useWindowScroll()

  const [showAffix, setShowAffix] = useState<boolean>(false)

  useEffect(() => {
    if (!y || !displayPosition) return
    if (y > displayPosition) setShowAffix(true)
    else setShowAffix(false)
  }, [displayPosition, y])

  return (showAffix && (
    <Portal className="fixed" style={{ ..._position, zIndex }} target={target}>
      {_children}
    </Portal>
  )) as any
}

Affix.defaultProps = {
  displayPosition: 30,
}

export { Affix }
