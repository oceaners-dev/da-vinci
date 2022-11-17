import React from 'react'
import { navigationStore } from '../../utils/stores/nav-store'

export default function Sider(props: SiderProps) {
  const { children, className } = props
  const isExpandedStore = navigationStore((state) => state.isExpanded)

  return (
    <div
      className={
        'block' +
        ' ' +
        'max-w-[240px]' +
        ' ' +
        (className || ' ') +
        ' ' +
        (isExpandedStore ? 'w-full' : 'w-20') +
        ' ' +
        ' transform transition-width '
      }
    >
      {children}
    </div>
  )
}

export interface SiderProps {
  children: React.ReactNode
  className?: React.HTMLAttributes<HTMLElement>['className']
}