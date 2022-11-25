import React from 'react';
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
export interface PaginationProps {
    /**
     * className for the whole component
     */
    className?: string;
    current?: number;
    /**
     * For `limit` pagination item count. For example. if you have `30 pages` and
     * you `don't want to` have a pagination with 30 items, you can set `limit` prop to `5`.
     * It's `10` by default.
     */
    maxPageCount?: number;
    onChange?: (page: number) => void;
    /**
     * If you set per page prop, `we can calculate page count automatically`.
     * Don't forget to set `total` prop too.
     */
    perPage?: number;
    total: number;
}
