import React from 'react';
export declare function Title(props: TitleProps): JSX.Element;
export declare namespace Title {
    var defaultProps: {
        heading: string;
        weight: string;
    };
}
export interface TitleProps {
    children: React.ReactNode;
    className?: string;
    color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'tertiary';
    context?: string;
    copyable?: boolean;
    heading?: '1' | '2' | '3' | '4' | '5' | '6';
    style?: React.CSSProperties;
    weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
}
