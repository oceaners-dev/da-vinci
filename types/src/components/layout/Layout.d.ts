import React from 'react';
export declare function Layout(props: LayoutProps): JSX.Element;
export declare namespace Layout {
    var defaultProps: {
        hasSidebar: boolean;
    };
}
export interface LayoutProps {
    children: React.ReactNode;
    className?: React.HTMLAttributes<HTMLElement>['className'];
    fullHeight?: boolean;
    hasSidebar?: boolean;
}
