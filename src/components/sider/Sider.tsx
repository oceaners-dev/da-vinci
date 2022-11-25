import React from 'react';
import { NavContext } from '../nav/Context';

export function Sider(props: SiderProps) {
  const { children, className } = props;
  const context = React.useContext(NavContext);
  const isExpanded = context?.isExpanded;

  return (
    <div
      className={
        'block' +
        ' ' +
        'max-w-[240px]' +
        ' ' +
        (className || ' ') +
        ' ' +
        (isExpanded ? 'w-full' : 'w-20') +
        ' ' +
        ' transform transition-width '
      }
    >
      {children}
    </div>
  );
}

export interface SiderProps {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLElement>['className'];
}
