import { forwardRef, useCallback, useEffect, useState } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useEventListener } from '../../hooks/useEventListener'
import { Card } from '../card-UNFINISHED/Card'
import { Portal } from '../portal'
import theme from '../../../../tailwind.config'
import { SvgX } from '../../utils/svg'
import Space from '../space'
import Button from '../button/Button'

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
        className={`fixed inset-0 bg-black/50 w-screen h-screen ${
          overlayClasses || ''
        }`}
      >
        <Card
          ref={(ref) => {
            clickedOutside.current = ref
          }}
          className={`absolute  
          ${calculateClasses(placement, withSideSpace, size)}
          ${className || ''}`}
        >
          <div className="w-full h-full relative flex flex-col">
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
            {footerButtons && (
              <>
                <Space direction="vertical" />
                <div className="flex flex-row w-full gap-2">
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
  className?: React.HTMLAttributes<HTMLElement>['className'] // ✅
  placement?: 'left' | 'right' | 'top' | 'bottom' // ✅
  /**
   * You can modify the `size` of the SideSheet with `className` prop. `Don't forget` to
   * add `max-width` for extra large uber super sonic monitors 🖥️ max-width is `600px` by default.
   */
  size?: 'small' | 'medium' | 'large' // ✅
  isOpen?: boolean // ✅
  onClose?: () => void // ✅
  onOpen?: () => void // ✅
  closeIcon?: boolean | JSX.Element // ✅
  closeOnEsc?: boolean // ✅
  closeOnOverlayClick?: boolean // ✅
  overlayClasses?: string // ✅
  withSideSpace?: boolean // ✅
  title?: string | JSX.Element // ✅
  footerButtons?: {
    // ✅
    text?: string
    buttonClasses?: string
    onClick?: () => void
  }[]
}

const calculateClasses = (placement, withSideSpace, size) => {
  const positions = {
    left: `${
      withSideSpace
        ? 'left-hf-side-padding top-hf-side-padding/2'
        : 'left-0 top-0'
    }`,
    right: `${
      withSideSpace
        ? 'right-hf-side-padding top-hf-side-padding/2'
        : 'right-0 top-0'
    }`,
    top: `${
      withSideSpace
        ? 'left-hf-side-padding/2 top-hf-side-padding'
        : 'left-0 top-0'
    }`,
    bottom: `${
      withSideSpace
        ? 'left-hf-side-padding/2 bottom-hf-side-padding'
        : 'left-0 bottom-0'
    }`,
  }
  const sizes = {
    topBottom: `${
      (size === 'medium'
        ? `h-[30vw]`
        : size === 'large'
        ? 'h-[50vw]'
        : 'h-[20vw]') +
      ' ' +
      (withSideSpace
        ? 'w-[-webkit-fill-available] mx-hf-side-padding'
        : 'w-full')
    }`,
    leftRight: `${
      (size === 'medium'
        ? 'w-[35vw]'
        : size === 'large'
        ? 'w-[50vw]'
        : 'w-[25vw]') +
      ' max-w-[600px] ' +
      (withSideSpace
        ? `h-[-webkit-fill-available] my-hf-side-padding`
        : 'h-full')
    }`,
  }
  return `${positions[placement]} ${
    sizes[
      placement === 'left' || placement === 'right' ? 'leftRight' : 'topBottom'
    ]
  }`
}
