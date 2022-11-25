import React from 'react';
export declare function Indicator(props: IndicatorProps): JSX.Element;
export declare namespace Indicator {
    var defaultProps: {
        size: string;
        shape: string;
        bgColor: string;
        textColor: string;
        borderColor: string;
        position: string;
    };
}
export interface IndicatorProps {
    bgColor?: string;
    borderColor?: string;
    children?: React.ReactNode;
    className?: React.HTMLAttributes<HTMLElement>['className'];
    count?: number;
    dot?: boolean;
    overflowCount?: number;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    randomColor?: number;
    shape: 'square' | 'circle';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    style?: React.CSSProperties;
    text?: string;
    textColor?: string;
}
