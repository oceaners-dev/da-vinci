import { default as CustomLink, LinkProps } from 'next/link'
import { forwardRef } from 'react'

// TODO: active classname is not logical
export const Link = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (props, ref) => {
    const { children, className, icon, isActive, ...rest } = props
    return (
      <CustomLink
        {...rest}
        className={`py-2 flex flex-row items-center justify-center text-gray-600 hover:bg-gray-200 hover:button-classes ${
          !icon ? 'px-2' : ''
        } ${isActive && 'button-classes'} ${className}`}
        ref={ref}
      >
        {icon && (
          <div className="px-2 [&>svg]:w-6 [&>svg]:h-6  leading-none">
            {icon}
          </div>
        )}
        <div className="w-full max-w-[150px] font-medium">{children}</div>
      </CustomLink>
    )
  },
)

export interface CustomLinkProps extends LinkProps {
  children: React.ReactNode /* as prop can be Link or Button */
  icon?: React.ReactNode
  className?:
    | React.HTMLAttributes<HTMLButtonElement>['className']
    | React.HTMLAttributes<HTMLAnchorElement>['className']
  isActive?: boolean // ?
}