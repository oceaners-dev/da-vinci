import React, { useCallback, useEffect, useState } from 'react'
import uuid from 'react-uuid'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useEventListener } from '../../hooks/useEventListener'
import { SvgX } from '../../utils/svg'
import { Button } from '../button/Button'
import { Card } from '../card-UNFINISHED/Card'
import { Portal } from '../portal/Portal'
import { Space } from '../space/Space'

// TODO: forward the ref
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const {
      children,
      title,
      className,
      isOpen,
      closeOnOverlayClick,
      fullScreen,
      onClose,
      onOpen,
      closeIcon,
      closeOnEsc,
      footerButtons,
      size,
      overlayClasses,
      footer,
    } = props

    const [isOpened, setIsOpened] = useState(isOpen)

    const closeModal = useCallback(() => {
      setIsOpened(false)
      onClose && onClose()
    }, [])

    const clickedOutside = useClickOutside(() => {
      if (closeOnOverlayClick) {
        closeModal()
      }
    })

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
        onOpen
      }
    }, [isOpen])

    if (!isOpened) return null

    return (
      <Portal
        className={`fixed inset-0 z-50 bg-black/50 w-screen h-screen ${overlayClasses}`}
      >
        <Card
          ref={(cardRef) => {
            clickedOutside.current = cardRef
          }}
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                ${fullScreen ? 'w-screen h-screen' : ''}
                ${
                  !fullScreen &&
                  (size === 'small'
                    ? 'w-[400px] h-auto'
                    : size === 'large'
                    ? 'w-[700px] h-auto'
                    : 'w-[550px] h-auto')
                }
                ${className || ''}
                `}
        >
          <div className="w-full h-full relative">
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
                <div>{title}</div>
                <Space direction="vertical" />
              </>
            )}
            {children}
          </div>

          {footer && (
            <>
              <Space direction="vertical" />
              {footer}
            </>
          )}
          {footerButtons && (
            <>
              <Space direction="vertical" />
              <div className="flex flex-row w-full justify-end gap-2">
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
        </Card>
      </Portal>
    )
  },
)

Modal.defaultProps = {
  isOpen: false,
  size: 'medium',
  closeOnOverlayClick: true,
  closeOnEsc: true,
  fullScreen: false,
  closeIcon: true,
}

export interface ModalProps {
  children: React.ReactNode // ✅
  className?: string
  // ✅
  closeIcon?: boolean | JSX.Element
  // ✅
  closeOnEsc?: boolean
  closeOnOverlayClick?: boolean
  // ✅
  footer?: React.ReactNode
  // ✅
  footerButtons?: {
    buttonClasses?: string
    onClick?: () => void
    // ✅
    text?: string
  }[]
  // ✅
  fullScreen?: boolean
  // ✅
  isOpen?: boolean
  // ✅
  onClose?: () => void
  // ✅
  onOpen?: () => void
  // ✅
  overlayClasses?: string
  // ✅
  size?: 'small' | 'medium' | 'large'
  // ✅
  title?: string | JSX.Element // ✅ dont forget to use ! for override classes
}
