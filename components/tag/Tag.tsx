import Image from 'next/image'
import { forwardRef, useRef } from 'react'
import uuid from 'react-uuid'
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
    tagKey = uuid(),
  } = props
  const tagRef = useRef<HTMLDivElement>(null)

  const mergedRef = useMergedRef(tagRef, ref)

  return (
    <div
      ref={mergedRef}
      className={
        'w-fit px-1 py-px text-xs rounded-sm cursor-default leading-none flex flex-row items-center ' +
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
              onClose(tagKey)
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
  children: React.ReactNode
  avatarShape?: 'square' | 'circle'
  avatarSrc?: React.ComponentProps<typeof Image>['src']
  className?: string
  closable?: boolean
  /**
   * TailwindCSS class for color
   */
  color?: string
  /**
   * Defines padding between tag text
   */
  size?: 'small' | 'large' | 'default'
  type?: 'light' | 'solid' | 'ghost'
  tagKey?: string | number
  onClick?: (e: MouseEvent) => void
  onClose?: (tagKey: string | number) => void
  /**
   * @description Disables removing node on closing tag. Needs for `Select` component.
   */
  removeNodeOnClose?: boolean
}
