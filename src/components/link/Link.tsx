import { default as CustomLink, LinkProps } from 'next/link'
import React, { forwardRef } from 'react'

// TODO: active classname is not logical
// FIXME: causing hydration error
export const Link = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (props, ref) => {
    const { children, className, icon, isActive, ...rest } = props
    return (
      <CustomLink {...rest} ref={ref}>
        <div
          className={`flex flex-row items-center ${
            !icon ? 'px-1' : children && 'pr-2'
            // TODO: remove pr-2 on expanded
          } ${isActive && 'button-classes'} ${className}`}
        >
          {icon && (
            <div className="px-1 [&>svg]:w-[1.3em] [&>svg]:h-[1.3em] leading-none">
              {icon}
            </div>
          )}
          {children && (
            <div className="w-full max-w-[150px] font-medium leading-none">
              {children}
            </div>
          )}
        </div>
      </CustomLink>
    )
  },
)

export interface CustomLinkProps extends LinkProps {
  children: React.ReactNode /* as prop can be Link or Button */
  className?:
    | React.HTMLAttributes<HTMLButtonElement>['className']
    | React.HTMLAttributes<HTMLAnchorElement>['className']
  icon?: React.ReactNode
  isActive?: boolean // ?
}
