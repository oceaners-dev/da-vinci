import * as React from 'react'
import { SvgRightArrow } from '../../utils/svg'
import { Link } from '../link/Link'

export interface BreadcrumbProps {
  classNames?: {
    divider?: string
    link?: string
    wrapper?: string
  }
  divider?: React.ReactNode
  items: Array<{
    href?: string
    icon?: React.ReactNode
    label: string
  }>
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  classNames = {
    divider: '',
    link: '',
    wrapper: '',
  },
  divider,
  items,
}) => {
  return (
    <nav aria-label={'breadcrumb ' + classNames.wrapper}>
      <ol className="flex flex-row items-center gap-1">
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            <li className="breadcrumb-item">
              {item.href ? (
                <Link
                  href={item.href}
                  icon={item.icon}
                  className={
                    classNames.link + ' hover:underline cursor-pointer'
                  }
                >
                  {item.label}
                </Link>
              ) : (
                <span className={classNames.link}>{item.label}</span>
              )}
            </li>
            {index < items.length - 1 &&
              (divider ? (
                divider
              ) : (
                <SvgRightArrow className={classNames.divider} />
              ))}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}

export { Breadcrumb }
