import React from 'react';
export declare function Avatar(props: AvatarProps): JSX.Element;
export declare namespace Avatar {
    var defaultProps: {
        size: string;
        shape: string;
        color: string;
        textColor: string;
    };
}
export interface AvatarProps {
    children?: React.ReactNode;
    className?: React.HTMLAttributes<HTMLElement>['className'];
    color?: string;
    name?: string;
    randomColor?: number;
    shape: 'square' | 'circle';
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'default';
    srcImg?: string;
    style?: React.CSSProperties;
    textColor?: string;
}
