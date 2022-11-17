import React from 'react'

export default function Button(props: ButtonProps) {
  // TODO: create themes > solid, dark, borderless,
  // TODO: create types > primary, secondary, tertiary, ghost, link

  const { children, icon, isActive, className, ...rest } = props

  /* It's a string of classes that are applied to the button when it's hovered over or if it's active etc.. */

  return (
    <button
      className={`py-2 flex flex-row items-center justify-center text-gray-600 hover:bg-gray-200 hover:button-classes ${
        !icon ? 'px-2' : ''
      } ${isActive && 'button-classes'} ${className}`}
      {...rest}
    >
      {icon && (
        <div className="px-2 [&>svg]:w-6 [&>svg]:h-6 leading-none">{icon}</div>
      )}
      <div className="w-full max-w-[150px] font-medium">{children}</div>
    </button>
  )
}

Button.defaultProps = {
  isActive: true,
}

export interface HtmlButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode /* as prop can be Link or Button */
  icon?: React.ReactNode
  className?:
    | React.HTMLAttributes<HTMLButtonElement>['className']
    | React.HTMLAttributes<HTMLAnchorElement>['className']
  onClick: React.HTMLAttributes<HTMLButtonElement>['onClick']
  isActive?: boolean
}

/**
 * @param children - The content of the button.
 * @param icon - The icon of the button.
 * @param className - The className of the button.
 * @param isActive - You can set "active" the button. It will seems like it's hovered. Useful in navigation.
 */
export type ButtonProps = HtmlButtonProps
