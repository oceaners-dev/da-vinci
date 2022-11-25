import { LinkProps } from 'next/link';
import React from 'react';
export declare const Link: React.ForwardRefExoticComponent<CustomLinkProps & React.RefAttributes<HTMLAnchorElement>>;
export interface CustomLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: React.HTMLAttributes<HTMLButtonElement>['className'] | React.HTMLAttributes<HTMLAnchorElement>['className'];
    icon?: React.ReactNode;
    isActive?: boolean;
}
