import React, { useCallback, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { navigationStore } from '../../utils/stores/nav-store';
import { DaVinciLogo } from '../../utils/svg';
import { Card } from '../card-UNFINISHED/Card';
import { Link } from '../link/Link';
import { SvgExpandToRight } from './Svg';

export function Nav(props: NavProps) {
  const {
    children,
    className,
    items,
    expanded,
    hasExpandButton,
    activeItem,
    logo,
    vertical,
  } = props;
  // store
  const isExpandedStore = navigationStore((state) => state.isExpanded);
  const setIsExpanded = navigationStore((state) => state.setIsExpanded);

  // states
  const [isExpanded, setIsExpandedState] = useState<boolean>(expanded === true);

  // useeffects
  useEffect(() => {
    if (expanded !== undefined) {
      setIsExpandedState(expanded);
    }
  }, [expanded]);

  useEffect(() => {
    if (isExpandedStore !== undefined) {
      setIsExpandedState(isExpandedStore);
    }
  }, [isExpandedStore]);

  // callbacks
  const handleExpanded = useCallback(() => {
    setIsExpanded(!isExpandedStore);
  }, [isExpandedStore]);

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
          logo
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
                handleExpanded();
              }}
            >
              <SvgExpandToRight className={isExpanded ? 'rotate-180' : ''} />
            </button>
          </>
        )}
      </Card>
    </nav>
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
  expanded?: false;
  hasExpandButton?: false;
  items?: NavItem[];
  logo?: React.ReactNode;
  vertical?: false;
}

export interface NavVerticalProps {
  // user must compare something with one of NavItem's param
  activeItem?: NavItem;
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLElement>['className'];
  expanded?: true;
  hasExpandButton?: true;
  items?: NavItem[];
  logo?: React.ReactNode;
  vertical?: true;
}

export type NavProps = NavPropHorizontal | NavVerticalProps;

export interface NavItem {
  icon?: React.ReactNode;
  label: string;
  link: string;
}
