import React, { forwardRef, ReactElement, useEffect, useState } from 'react'
import { TagProps } from './Tag'

export const TagGroup = forwardRef<HTMLDivElement, TagGroupType>(
  (props, ref) => {
    const {
      children, // ✅
      maxTagCount, // ✅
      avatarShape, // ✅
      classNames, // ✅
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

    console.log({ maxTagCount })

    const allowedTags = customChildren.slice(0, maxTagCount)
    const hiddenTags = customChildren.slice(maxTagCount, customChildren.length)
    console.log({ allowedTags, hiddenTags })

    return (
      <div
        ref={ref}
        className={`flex flex-row items-center flex-wrap gap-1 ${
          className || ''
        }`}
      >
        {allowedTags}
        {maxTagCount && showMore && hiddenTags && hiddenTags.length !== 0 && (
          <button className="text-xs">+{hiddenTags.length}</button>
        )}
      </div>
    )
  },
)

export interface TagGroupType {
  // children with TagProps
  children: React.ReactNode
  /**
   * @description className for `tag group`
   */
  className?: string
  maxTagCount?: number
  /**
   * @description classNames for `each tag`.
   */
  classNames?: string
  avatarShape?: 'square' | 'circle'
  /**
   * @description Display other tags on hover count of hidden tags.
   */
  showMore?: boolean
}
