import React from 'react';
export declare const SideSheet: React.ForwardRefExoticComponent<SideSheetProps & React.RefAttributes<HTMLDivElement>>;
export interface SideSheetProps {
    children: React.ReactNode;
    /**
     * `Card` classes. You can change card design by passing tailwind classes here.
     */
    className?: React.HTMLAttributes<HTMLElement>['className'];
    closeIcon?: boolean | JSX.Element;
    closeOnEsc?: boolean;
    closeOnOverlayClick?: boolean;
    footerButtons?: {
        buttonClasses?: string;
        onClick?: () => void;
        text?: string;
    }[];
    isOpen?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    overlayClasses?: string;
    placement?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * You can modify the `size` of the SideSheet with `className` prop. `Don't forget` to
     * add `max-width` for extra large uber super sonic monitors 🖥️ max-width is `600px` by default.
     */
    size?: 'small' | 'medium' | 'large';
    title?: string | JSX.Element;
    withSideSpace?: boolean;
}
