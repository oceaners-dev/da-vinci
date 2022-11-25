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
    expanded?: false;
    hasExpandButton?: false;
    items?: NavItem[];
    logo?: React.ReactNode;
    vertical?: false;
}
export interface NavVerticalProps {
    activeItem?: NavItem;
    children?: React.ReactNode;
    className?: React.HTMLAttributes<HTMLElement>['className'];
    expanded?: true;
    hasExpandButton?: true;
    items?: NavItem[];
    logo?: React.ReactNode;
    vertical?: true;
}
export declare type NavProps = NavPropHorizontal | NavVerticalProps;
export interface NavItem {
    icon?: React.ReactNode;
    label: string;
    link: string;
}
