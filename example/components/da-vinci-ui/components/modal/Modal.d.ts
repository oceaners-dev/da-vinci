import React from 'react';
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
export interface ModalProps {
    children: React.ReactNode;
    className?: string;
    closeIcon?: boolean | JSX.Element;
    closeOnEsc?: boolean;
    closeOnOverlayClick?: boolean;
    footer?: React.ReactNode;
    footerButtons?: {
        buttonClasses?: string;
        onClick?: () => void;
        text?: string;
    }[];
    fullScreen?: boolean;
    isOpen?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    overlayClasses?: string;
    size?: 'small' | 'medium' | 'large';
    title?: string | JSX.Element;
}
