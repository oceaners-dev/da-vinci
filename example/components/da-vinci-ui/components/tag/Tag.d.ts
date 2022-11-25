import React from 'react';
import Image from 'next/image';
export declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLDivElement>>;
export interface TagProps {
    avatarShape?: 'square' | 'circle';
    avatarSrc?: React.ComponentProps<typeof Image>['src'];
    children: React.ReactNode;
    className?: string;
    closable?: boolean;
    /**
     * TailwindCSS class for color
     */
    color?: string;
    onClick?: (e: MouseEvent) => void;
    onClose?: () => void;
    /**
     * @description Disables removing node on closing tag. Needs for `Select` component.
     */
    removeNodeOnClose?: boolean;
    /**
     * Defines padding between tag text
     */
    size?: 'small' | 'large' | 'default';
    tagKey?: string;
    type?: 'light' | 'solid' | 'ghost';
}
