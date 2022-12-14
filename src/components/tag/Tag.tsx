import React, { forwardRef, useRef } from 'react'
import Image from 'next/image'
import { useMergedRef } from '../../hooks/use-merged-ref'
import { SvgX } from '../../utils/svg'

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    children,
    type, // ✅
    avatarShape, // ✅
    avatarSrc, // ✅
    className, // ✅
    closable, // ✅
    color, // 🚨
    onClose, // ✅
    removeNodeOnClose, // ✅
    tagKey,
  } = props
  const tagRef = useRef<HTMLDivElement>(null)

  const mergedRef = useMergedRef(tagRef, ref)

  return (
    <div
      ref={mergedRef}
      className={
        'w-fit px-1 py-px text-xs rounded-sm cursor-default leading-none flex flex-row items-center relative z-[53] ' +
        `${
          type === 'light'
            ? 'bg-gray-300'
            : type === 'solid'
            ? 'bg-primary'
            : 'bg-gray-100 border-gray-700'
        }` +
        ' ' +
        `${className || ''}`
      }
    >
      {avatarSrc && (
        <Image
          className={
            'inline leading-none mr-[2px]' +
            ' ' +
            `${avatarShape === 'square' ? 'rounded-xs' : 'rounded-full'}`
          }
          src={avatarSrc}
          width={13}
          height={13}
          alt={children!.toString()}
        />
      )}
      <div className="leading-none">{children}</div>

      {closable && (
        <button
          className="leading-none ml-[2px]"
          onClick={() => {
            if (onClose) {
              onClose()
            }
            if (removeNodeOnClose) {
              if (!tagRef) return
              if (!tagRef.current) return
              tagRef.current?.remove()
            }
          }}
        >
          <SvgX />
        </button>
      )}
    </div>
  )
})

Tag.defaultProps = {
  type: 'light',
  avatarShape: 'circle',
  removeNodeOnClose: true,
}

export interface TagProps {
  avatarShape?: 'square' | 'circle'
  avatarSrc?: React.ComponentProps<typeof Image>['src']
  children: React.ReactNode
  className?: string
  closable?: boolean
  /**
   * TailwindCSS class for color
   */
  color?: string
  onClick?: (e: MouseEvent) => void
  onClose?: () => void
  /**
   * @description Disables removing node on closing tag. Needs for `Select` component.
   */
  removeNodeOnClose?: boolean
  /**
   * Defines padding between tag text
   */
  size?: 'small' | 'large' | 'default'
  tagKey?: string
  type?: 'light' | 'solid' | 'ghost'
}
