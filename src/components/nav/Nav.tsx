import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { DaVinciLogo } from '../../utils/svg';
import { Card } from '../card-UNFINISHED/Card';
import { Link } from '../link/Link';
import { NavContext } from './Context';
import { SvgExpandToRight } from './Svg';

export function Nav(props: NavProps) {
  const {
    children,
    className,
    items,
    expanded,
    hasExpandButton,
    expandedLogo,
    activeItem,
    logo,
    vertical,
  } = props;

  const context = React.useContext(NavContext);
  useEffect(() => {
    if (!window) return;
    context.setIsExpanded(expanded as boolean);
  }, [expanded]);

  return (
    <NavContext.Consumer>
      {({ isExpanded, setIsExpanded }) => {
        return (
          <nav className={''}>
            <Card
              className={
                'w-[-webkit-fill-available] flex gap-[6px] text-gray-600 ' +
                ' ' +
                (vertical ? 'flex-col' : 'flex-row') +
                ' ' +
                (className || ' ')
              }
            >
              {logo ? (
                isExpanded ? (
                  expandedLogo ? (
                    expandedLogo
                  ) : (
                    logo
                  )
                ) : (
                  logo
                )
              ) : (
                <div className="flex items-center gap-2 font-medium font-serif w-auto justify-center">
                  <DaVinciLogo className="w-6 h-6" />
                  {isExpanded && 'DaVinci UI'}
                </div>
              )}
              {vertical ? (
                <div className="w-full h-8" />
              ) : (
                <div className="h-full w-8" />
              )}
              {children
                ? children
                : items?.map((item) => {
                    return (
                      <Link
                        key={uuid()}
                        isActive={item.link === activeItem?.link}
                        href={item.link}
                        className="!justify-start"
                        icon={item.icon}
                      >
                        {vertical ? (isExpanded ? item.label : '') : item.label}
                      </Link>
                    );
                  })}

              {hasExpandButton && vertical && (
                <>
                  <div className="w-full h-8" />
                  <button
                    className="w-fit ml-3"
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    <SvgExpandToRight
                      className={isExpanded ? 'rotate-180' : ''}
                    />
                  </button>
                </>
              )}
            </Card>
          </nav>
        );
      }}
    </NavContext.Consumer>
  );
}

Nav.defaultProps = {
  expanded: true,
  hasExpandButton: true,
  vertical: true,
};

export interface NavPropHorizontal {
  // user must compare something with one of NavItem's param
  activeItem?: NavItem;
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLElement>['className'];
  expanded?: boolean;
  /**
   * @description: There's two logo type: `expandedLogo` and `logo`. When `Nav` expanded, `expandedLogo` will be displayed. If your logo is small, you can use same logo.
   */
  expandedLogo?: React.ReactNode;
  hasExpandButton?: boolean;
  items?: NavItem[];
  logo?: React.ReactNode;
  vertical?: boolean;
}

export interface NavVerticalProps {
  // user must compare something with one of NavItem's param
  activeItem?: NavItem;
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLElement>['className'];
  expanded?: boolean;
  /**
   * @description: There's two logo type: `expandedLogo` and `logo`. When `Nav` expanded, `expandedLogo` will be displayed. If your logo is small, you can use same logo.
   */
  expandedLogo?: React.ReactNode;
  hasExpandButton?: boolean;
  items?: NavItem[];
  logo?: React.ReactNode;
  vertical?: boolean;
}

export type NavProps = NavPropHorizontal | NavVerticalProps;

export interface NavItem {
  icon?: React.ReactNode;
  label: string;
  link: string;
}
