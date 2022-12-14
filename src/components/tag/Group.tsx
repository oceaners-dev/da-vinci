import React, { forwardRef, ReactElement } from 'react'
import { TagProps } from './Tag'

export const TagGroup = forwardRef<HTMLDivElement, TagGroupType>(
  (props, ref) => {
    const {
      children, // ✅
      maxTagCount, // ✅
      avatarShape, // ✅
      classNames, // ✅
      focusFn, // ✅
      className, // ✅
      showMore, // 🚨 TODO: implement
    } = props

    const customChildren = React.Children.map(
      children as ReactElement<TagProps>[],
      (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            key: child.props?.tagKey,
            avatarShape,
            className: classNames,
          })
        }
      },
    ) as ReactElement<TagProps>[]

    const allowedTags = customChildren.slice(0, maxTagCount)
    const hiddenTags = customChildren.slice(maxTagCount, customChildren.length)

    return (
      <div
        ref={ref}
        className={`flex flex-row items-center flex-wrap gap-1 relative ${
          className || ''
        }`}
      >
        {focusFn && (
          <div
            data-name="select-focus-helper"
            className="absolute inset-0 z-0 w-full h-full"
            onClick={() => {
              focusFn()
            }}
          />
        )}
        {allowedTags}
        {maxTagCount && showMore && hiddenTags && hiddenTags.length !== 0 && (
          <button className="text-xs">+{hiddenTags.length}</button>
        )}
      </div>
    )
  },
)

export interface TagGroupType {
  avatarShape?: 'square' | 'circle'
  // children with TagProps
  children: React.ReactNode
  /**
   * @description className for `tag group`
   */
  className?: string
  /**
   * @description classNames for `each tag`.
   */
  classNames?: string
  /**
   * @description Function to open dropdown or trigger what you want on click of div above tags. Useful when you want to open dropdown on clicking div above tags.
   */
  focusFn?: () => void
  maxTagCount?: number

  /**
   * @description Display other tags on hover count of hidden tags.
   */
  showMore?: boolean
}
