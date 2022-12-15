import React from 'react'

// TODO: https://ui.mantine.dev/category/navbars copy something
export function Layout(props: LayoutProps) {
  const {
    children, // ✅
    className, // ✅
    hasSidebar,
    header,
    fullHeight,
    footer,
    ...rest
  } = props
  return (
    <div
      className={`
        w-[-webkit-fill-available] max-w-[100vw] flex box-border ${
          className || ''
        } ${
        header || footer ? 'flex-col' : hasSidebar ? 'flex-row' : 'flex-col'
      } ${fullHeight ? 'h-full' : ''}`}
      {...rest}
    >
      {header && <div className="w-full box-border">{header}</div>}
      <div
        className={
          (hasSidebar ? 'flex-row gap-5' : 'flex-col') + ' flex w-full h-auto'
        }
      >
        {children}
      </div>
      {footer && <div className="w-full box-border">{footer}</div>}
    </div>
  )
}

Layout.defaultProps = {
  hasSidebar: false,
}

export interface LayoutProps {
  children: React.ReactNode
  /**
   * classNames for `Layout` wrapper
   * @type {React.ReactNode}
   * @memberof LayoutProps
   */
  className?: React.HTMLAttributes<HTMLElement>['className']
  /**
   * Footer will be displayed on bottom of the layout
   * @type {React.ReactNode}
   * @memberof LayoutProps
   */
  footer?: React.ReactNode
  fullHeight?: boolean
  hasSidebar?: boolean
  /**
   * Header will be displayed on top of the layout
   * @type {React.ReactNode}
   * @memberof LayoutProps
   */
  header?: React.ReactNode
}
