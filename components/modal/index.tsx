import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useEventListener } from '../../hooks/useEventListener'
import { SvgX } from '../../utils/svg'
import Button from '../button/Button'
import { Card } from '../card-UNFINISHED/Card'
import { Portal } from '../portal'
import Space from '../space'

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
      onClose
    }, [])

    const clickedOutside = useClickOutside(() => {
      if (closeOnOverlayClick) {
        closeModal()
      }
    })

    if (closeOnEsc) {
      useEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
          closeModal()
        }
      })
    }

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
        className={`fixed inset-0 bg-black/50 w-screen h-screen ${overlayClasses}`}
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
                    ? 'w-[400px]'
                    : size === 'large'
                    ? 'w-[700px]'
                    : 'w-[550px]')
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
  className?: string // ✅
  isOpen?: boolean // ✅
  onClose?: () => void // ✅
  onOpen?: () => void // ✅
  size?: 'small' | 'medium' | 'large' // ✅
  title?: string | JSX.Element // ✅
  closeIcon?: boolean | JSX.Element // ✅
  closeOnEsc?: boolean // ✅
  footer?: React.ReactNode // ✅
  fullScreen?: boolean // ✅
  footerButtons?: {
    // ✅
    text?: string
    buttonClasses?: string
    onClick?: () => void
  }[]
  closeOnOverlayClick?: boolean // ✅
  overlayClasses?: string // ✅ dont forget to use ! for override classes
}
