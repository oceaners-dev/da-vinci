import React from 'react';
export declare function Spin(props: SpinProps): JSX.Element;
export declare namespace Spin {
    var defaultProps: {
        size: string;
        shape: string;
        type: string;
        spinColor: string;
        circleColor: string;
    };
}
interface SpinProps {
    children?: React.ReactNode;
    circleColor?: string;
    className?: React.HTMLAttributes<HTMLElement>['className'];
    size?: 'sm' | 'md' | 'lg' | 'xl';
    spinColor?: 'brand' | 'danger' | 'important' | 'informative' | 'severe' | 'subtle' | 'success' | 'warning';
    style?: React.CSSProperties;
}
export {};
