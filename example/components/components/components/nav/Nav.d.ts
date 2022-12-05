import React from 'react';
export declare function Nav(props: NavProps): JSX.Element;
export declare namespace Nav {
    var defaultProps: {
        expanded: boolean;
        hasExpandButton: boolean;
        vertical: boolean;
    };
}
export interface NavPropHorizontal {
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
export declare type NavProps = NavPropHorizontal | NavVerticalProps;
export interface NavItem {
    icon?: React.ReactNode;
    label: string;
    link: string;
}
