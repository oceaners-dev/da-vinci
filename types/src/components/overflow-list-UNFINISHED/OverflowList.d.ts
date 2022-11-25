import React from 'react';
/**
 * @typedef {object} OverflowListProps
 * @description Makes a small list from elements. If the list is too long, it will be hidden and a button will be shown to open the list.
 * @description Suggested use with `Avatar` component and `nestedAvatars` prop.
 */
export declare const OverflowList: React.ForwardRefExoticComponent<OverflowListProps & React.RefAttributes<HTMLDivElement>>;
export interface OverflowListProps {
    children: React.ReactNode;
    /**
     * @description The maximum number of visible items before truncating.
     */
    maxElements?: number;
    maxWidth?: string;
    /**
     * @description Nested avatars will be shown with a border and overflow component.
     */
    nestedAvatars?: boolean;
    /**
     * @description Counts overflowing items and add them to a portal.
     */
    numberComponent?: React.ReactNode;
}
