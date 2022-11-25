import React from 'react';

// TODO: https://ui.mantine.dev/category/navbars copy something
export function Layout(props: LayoutProps) {
  const { children, className, hasSidebar, fullHeight } = props;
  return (
    <div
      className={`
        w-[-webkit-fill-available] max-w-[100vw] flex box-border ${
          className || ''
        } ${hasSidebar ? 'flex-row' : 'flex-col'} ${
        fullHeight ? 'h-full' : ''
      }`}
    >
      {children}
    </div>
  );
}

Layout.defaultProps = {
  hasSidebar: false,
};

export interface LayoutProps {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLElement>['className'];
  fullHeight?: boolean;
  hasSidebar?: boolean;
}
