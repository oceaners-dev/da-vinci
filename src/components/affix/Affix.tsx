import React, { useEffect, useState } from 'react';
import { useEventListener } from '../../hooks';
import { Portal } from '../portal/Portal';

export interface AffixProps {
  children?: React.ReactNode;
  /**
   * The y position of the affix when it is shown. Default is 30.
   */
  displayPosition?: number;
  position?: {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  };
  /**
   * If true, on click to children, the page will scroll to top.
   */
  scrollToTopOnClick?: boolean;
  target?: HTMLElement;
  zIndex?: number;
}

const Affix: React.FunctionComponent<AffixProps> = (props) => {
  const {
    children, // ✅
    displayPosition, // ✅
    scrollToTopOnClick, // ✅
    position, // ✅
    target, // ✅
    zIndex, // ✅
  } = props;

  const [topY, setTopY] = useState<number>(0);

  const _position = position || {
    bottom: 20,
    right: 20,
  };

  const _children = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // @ts-ignore
        onClick: () => {
          if (scrollToTopOnClick) {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }
          child.props.onClick && child.props.onClick();
        },
      });
    }
    return child;
  });

  useEventListener(
    'scroll',
    (a) => {
      const offsetTop = Math.abs(
        // @ts-ignore
        a.target.body // @ts-ignore
          ? a.target.body.getBoundingClientRect().y // @ts-ignore
          : a.target.scrollTop,
      );
      setTopY(offsetTop);
    },
    target!,
  );

  const [showAffix, setShowAffix] = useState<boolean>(false);

  useEffect(() => {
    if (!topY || !displayPosition) return;
    if (topY > displayPosition) setShowAffix(true);
    else setShowAffix(false);
  }, [displayPosition, topY]);

  return (showAffix && (
    <Portal className="fixed" style={{ ..._position, zIndex }} target={target}>
      {_children}
    </Portal>
  )) as any;
};

Affix.defaultProps = {
  displayPosition: 30,
};

export { Affix };
