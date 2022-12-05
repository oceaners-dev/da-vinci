import React from 'react';
export declare const TagGroup: React.ForwardRefExoticComponent<TagGroupType & React.RefAttributes<HTMLDivElement>>;
export interface TagGroupType {
    avatarShape?: 'square' | 'circle';
    children: React.ReactNode;
    /**
     * @description className for `tag group`
     */
    className?: string;
    /**
     * @description classNames for `each tag`.
     */
    classNames?: string;
    /**
     * @description Function to open dropdown or trigger what you want on click of div above tags. Useful when you want to open dropdown on clicking div above tags.
     */
    focusFn?: () => void;
    maxTagCount?: number;
    /**
     * @description Display other tags on hover count of hidden tags.
     */
    showMore?: boolean;
}
