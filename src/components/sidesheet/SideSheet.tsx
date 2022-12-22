import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useEventListener } from '../../hooks/useEventListener'
import { Card } from '../card-UNFINISHED/Card'
import { Portal } from '../portal/Portal'

import { SvgX } from '../../utils/svg'
import { Space } from '../space/Space'
import { Button } from '../button/Button'
import uuid from 'react-uuid'
import { useMergedRef } from '../../hooks'

// Or Drawer
export const SideSheet = forwardRef<HTMLDivElement, SideSheetProps>(
  (props, ref) => {
    const {
      children,
      className,
      placement,
      title,
      isOpen,
      size,
      onOpen,
      onClose,
      closeIcon,
      closeOnEsc,
      withSideSpace,
      closeOnOverlayClick,
      overlayClasses,
      footerButtons,
    } = props
    const [isOpened, setIsOpened] = useState(isOpen)
    const [isAnimationStarted, setIsAnimationStarted] = useState<boolean>(false)

    const closeModal = useCallback(() => {
      setIsAnimationStarted(false)

      setTimeout(() => {
        setIsOpened(false)
        onClose && onClose()
      }, 150)
    }, [])

    const clickedOutside = useClickOutside(() => {
      if (closeOnOverlayClick) {
        closeModal()
      }
    })

    const refs = useMergedRef(clickedOutside, ref)

    useEventListener('keyup', (e) => {
      if (closeOnEsc) {
        if (e.key === 'Escape') {
          closeModal()
        }
      }
    })

    useEffect(() => {
      if (!document) return
      setIsOpened(isOpen)

      if (isOpen) {
        onOpen && onOpen()
        setTimeout(() => {
          setIsAnimationStarted(true)
        }, 150)
      }
    }, [isOpen])

    if (!isOpened) return null

    return (
      <Portal
        className={`fixed inset-0 bg-black/50 z-50 w-screen h-screen ${
          overlayClasses || ''
        }`}
      >
        <Card
          ref={refs}
          className={
            `absolute 
          transition-all duration-150 transform ` +
            (isAnimationStarted ? 'opacity-1' : 'opacity-0') +
            ` ${calculateClasses({ placement, withSideSpace, size })}
          ${className || ''}`
          }
        >
          <div className="w-full h-full relative flex flex-col justify-between">
            <div className="flex flex-col">
              {/* close icon start */}
              {typeof closeIcon === 'boolean' && closeIcon && (
                <button
                  className="top-0 right-0 absolute"
                  onClick={() => closeModal()}
                >
                  <SvgX className="w-5 h-5" />
                </button>
              )}
              {typeof closeIcon !== 'boolean' && closeIcon && (
                <button
                  className="top-0 right-0 absolute"
                  onClick={() => closeModal()}
                >
                  {closeIcon}
                </button>
              )}
              {/* close icon end */}
              {title && (
                <>
                  <div className="font-medium">{title}</div>
                  <Space direction="vertical" />
                </>
              )}

              {children}
            </div>
            {footerButtons && (
              <>
                <Space direction="vertical" />
                <div className="flex flex-row w-full gap-2">
                  {footerButtons.map((button) => {
                    return (
                      <Button
                        key={uuid()}
                        className={`${button.buttonClasses || ''}`}
                        onClick={button.onClick}
                      >
                        {button.text}
                      </Button>
                    )
                  })}
                </div>
              </>
            )}
          </div>
        </Card>
      </Portal>
    )
  },
)

SideSheet.defaultProps = {
  withSideSpace: true,
  placement: 'right',
  size: 'medium',
  closeOnOverlayClick: true,
  closeOnEsc: true,
  closeIcon: true,
}

export interface SideSheetProps {
  children: React.ReactNode
  /**
   * `Card` classes. You can change card design by passing tailwind classes here.
   */
  className?: React.HTMLAttributes<HTMLElement>['className']
  // ✅
  closeIcon?: boolean | JSX.Element
  // ✅
  closeOnEsc?: boolean
  // ✅
  closeOnOverlayClick?: boolean
  // ✅
  footerButtons?: {
    buttonClasses?: string
    onClick?: () => void
    // ✅
    text?: string
  }[]
  // ✅
  isOpen?: boolean
  // ✅
  onClose?: () => void
  // ✅
  onOpen?: () => void
  // ✅
  overlayClasses?: string
  // ✅
  placement?: 'left' | 'right' | 'top' | 'bottom'
  // ✅
  /**
   * You can modify the `size` of the SideSheet with `className` prop. `Don't forget` to
   * add `max-width` for extra large uber super sonic monitors 🖥️ max-width is `600px` by default.
   */
  size?: 'small' | 'medium' | 'large' // ✅
  title?: string | JSX.Element
  // ✅
  withSideSpace?: boolean
}

const calculateClasses = ({
  placement,
  withSideSpace,
  size,
}: {
  placement?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'small' | 'medium' | 'large'
  withSideSpace?: boolean
}) => {
  const positions = {
    left: `${
      withSideSpace ? 'left-dv-baseLoose top-dv-baseLoose/2' : 'left-0 top-0'
    }`,
    right: `${
      withSideSpace ? 'right-dv-baseLoose top-dv-baseLoose/2' : 'right-0 top-0'
    }`,
    top: `${
      withSideSpace ? 'left-dv-baseLoose/2 top-dv-baseLoose' : 'left-0 top-0'
    }`,
    bottom: `${
      withSideSpace
        ? 'left-dv-baseLoose/2 bottom-dv-baseLoose'
        : 'left-0 bottom-0'
    }`,
  }
  const sizes = {
    topBottom: `${
      (size === 'medium'
        ? 'h-[30vw]'
        : size === 'large'
        ? 'h-[50vw]'
        : 'h-[20vw]') +
      ' ' +
      (withSideSpace ? 'w-[-webkit-fill-available] mx-dv-baseLoose' : 'w-full')
    }`,
    leftRight: `${
      (size === 'medium'
        ? 'w-[35vw]'
        : size === 'large'
        ? 'w-[50vw]'
        : 'w-[25vw]') +
      ' max-w-[600px] ' +
      (withSideSpace ? 'h-[-webkit-fill-available] my-dv-baseLoose' : 'h-full')
    }`,
  }
  return `${positions[placement!]} ${
    sizes[
      placement === 'left' || placement === 'right' ? 'leftRight' : 'topBottom'
    ]
  }`
}
