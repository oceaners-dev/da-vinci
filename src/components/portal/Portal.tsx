/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  /** Portal children, for example, modal or popover */
  children: React.ReactNode;

  /** Root element className */
  className?: string;

  style?: React.CSSProperties;
  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLElement | string;
}

export const Portal = React.forwardRef<HTMLDivElement, PortalProps>(
  (props, ref) => {
    const { children, target, className, style } = props;
    const [mounted, setMounted] = useState(false);
    const customRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (!document) return;
      setMounted(true);
      // @ts-ignore
      customRef.current = !target
        ? document.createElement('div')
        : typeof target === 'string'
        ? document.querySelector(target)
        : target;

      if (!target) {
        document.body.appendChild(customRef.current!);
      }

      return () => {
        !target && document.body.removeChild(customRef.current!);
      };
    }, [target]);

    if (!mounted) {
      return null;
    }

    return createPortal(
      <div style={style} ref={ref} className={className}>
        {children}
      </div>,
      customRef.current!,
    );
  },
);
