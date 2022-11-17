import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from 'react'

/**
 * @typedef {object} OverflowListProps
 * @description Makes a small list from elements. If the list is too long, it will be hidden and a button will be shown to open the list.
 * @description Suggested use with `Avatar` component and `nestedAvatars` prop.
 */
export const OverflowList = React.forwardRef<HTMLDivElement, OverflowListProps>(
  (props, ref) => {
    const { children, maxElements, numberComponent, maxWidth, nestedAvatars } =
      props

    const wrapperRef = React.useRef<HTMLDivElement>(null)
    const [showingCount, setShowingCount] = useState<number>()
    const [overflowingCount, setOverflowingCount] = useState<number>()
    const [renderComponent, setRenderComponent] = useState<
      | ReactElement<unknown, string | JSXElementConstructor<any>>[]
      | null
      | undefined
    >()

    useEffect(() => {
      if (!window || !wrapperRef.current) return
      const wrapperWidth = wrapperRef.current.offsetWidth
      const elementCount = wrapperRef.current.childElementCount
      const elementWidth = (wrapperRef.current.children[0] as HTMLElement)
        .offsetWidth
      const showingElementCount = Math.floor(wrapperWidth / elementWidth)
      const overflowingElementCount = elementCount - showingElementCount

      setShowingCount(showingElementCount)
    }, [wrapperRef])

    const customChildren = React.Children.map(children, (child, idx) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child)
      }
    })
    return (
      <div>
        <div
          ref={(ref) => {
            // @ts-ignore
            wrapperRef.current = ref
          }}
          className={`flex flex-row items-center ${
            nestedAvatars
              ? 'first:[&>*]:ml-0 [&>*]:border-2 [&>*]:border-solid [&>*]:border-white [&>*]:ml-[-7px] [&>*]:hover:!ml-px hover:[&>*]:scale-110'
              : ''
          } [&>*]:transition-all [&>*]:duration-100 [&>*]:transform 
        flex-wrap  flex-1 box-border ${maxWidth ? maxWidth : 'max-w-full'}
        `}
        >
          {customChildren}
        </div>
        <div>{overflowingCount}</div>
      </div>
    )
  },
)

OverflowList.defaultProps = {
  maxWidth: 'max-w-full',
}

export interface OverflowListProps {
  children: React.ReactNode
  /**
   * @description The maximum number of visible items before truncating.
   */
  maxElements?: number
  /**
   * @description Counts overflowing items and add them to a portal.
   */
  numberComponent?: React.ReactNode
  maxWidth?: string
  /**
   * @description Nested avatars will be shown with a border and overflow component.
   */
  nestedAvatars?: boolean
}
