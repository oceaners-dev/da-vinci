import React, { forwardRef, useEffect, useState } from 'react'
import uuid from 'react-uuid'
import { Card } from '../card-UNFINISHED/Card'
import { Link } from '../link/Link'
import { SvgExpandToRight } from './Svg'

const Nav = forwardRef<HTMLDivElement, NavProps>((props, ref) => {
  const {
    activeItem,
    children,
    className,
    expanded,
    expandedLogo,
    hasExpandButton,
    items,
    logo,
    onExpandChange, // ✅
    vertical,
  } = props
  const [isExpandedState, setIsExpandedState] = useState<boolean>(
    expanded as boolean,
  )

  useEffect(() => {
    setIsExpandedState(expanded as boolean)
  }, [expanded])

  useEffect(() => {
    onExpandChange && onExpandChange(isExpandedState)
  }, [isExpandedState])

  return (
    <nav className={''}>
      <Card
        className={
          'flex text-gray-600 transition-all transform duration-150' +
          ' ' +
          (vertical ? 'flex-col !w-fit' : 'flex-row !w-full items-center') +
          ' ' +
          (className || ' ') +
          ' '
          // (vertical && isExpandedState ? '!pr-20' : '')
        }
      >
        {logo &&
          (isExpandedState ? (
            expandedLogo ? (
              <div>{expandedLogo}</div>
            ) : (
              <div className="w-6 h-6">{logo}</div>
            )
          ) : (
            <div>{logo}</div>
          ))}

        {vertical && <div className="w-full h-12" />}

        {items && (
          <div
            className={
              (vertical ? 'flex-col gap-2' : 'flex-row gap-4 ml-12') + ' flex '
            }
          >
            {items.map((item) => {
              return (
                <Link
                  key={uuid()}
                  isActive={item.link === activeItem?.link}
                  href={item.link}
                  className={
                    '!justify-start cursor-pointer ' +
                    (vertical && isExpandedState ? '!pr-2' : '!justify-center')
                  }
                  icon={item.icon}
                >
                  {vertical ? (isExpandedState ? item.label : '') : item.label}
                </Link>
              )
            })}
          </div>
        )}

        {children && children}

        {hasExpandButton && vertical && (
          <>
            <div className="w-full h-8" />
            <button
              className="w-fit ml-3"
              onClick={() => {
                setIsExpandedState(!isExpandedState)
              }}
            >
              <SvgExpandToRight
                className={isExpandedState ? 'rotate-180' : ''}
              />
            </button>
          </>
        )}
      </Card>
    </nav>
  )
})

Nav.defaultProps = {
  expanded: true,
  hasExpandButton: true,
  vertical: true,
}

export interface NavProps {
  // user must compare something with one of NavItem's param
  activeItem?: NavItem
  children?: React.ReactNode
  className?: React.HTMLAttributes<HTMLElement>['className']
  expanded?: boolean
  /**
   * @description: There's two logo type: `expandedLogo` and `logo`. When `Nav` expanded, `expandedLogo` will be displayed. If your logo is small, you can use same logo.
   */
  expandedLogo?: React.ReactNode
  hasExpandButton?: boolean
  items?: NavItem[]
  logo?: React.ReactNode
  /**
   * You can watch changes with this function.
   * @param isExpanded
   * @returns
   */
  onExpandChange?: (isExpanded: boolean) => void
  vertical?: boolean
}

export interface NavItem {
  icon?: React.ReactNode
  label: string
  link: string
}

export { Nav }
