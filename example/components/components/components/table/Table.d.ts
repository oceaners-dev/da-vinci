import React from 'react';
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLDivElement>>;
declare type Row = {
    [key: string]: any;
};
export interface Column extends Pick<Row, any> {
    render?: (col?: Column) => React.ReactNode;
    search?: boolean;
    sorter?: (a: any, b: any) => number;
    title: string;
    /**
     * You can define responsive width classes for each column.
     */
    width?: string;
}
export interface TableProps {
    /**
     * Column properties like `title`, `width`
     */
    cols: Column[];
    /**
     * Enter which page number you want to display
     * @default 1
     */
    currentPage?: number;
    /**
     * Hides pagination.
     * @default false
     */
    hidePagination?: boolean;
    /**
     * Adds background color to cells on hover
     */
    highlightOnHover?: boolean;
    /**
     * Maximum number of rows to display in a page
     * @default 15
     */
    maxRows?: number;
    /**
     * On page change callback
     */
    onPageChange?: (page: number) => void;
    /**
     * Data for the table
     */
    rows: Row[];
    /**
     * Adds background color to odd cols
     */
    stripedHorizontal?: boolean;
    /**
     * Adds background color to odd cells
     */
    stripedVertical?: boolean;
    /**
     * Horizontal borders between lines
     */
    withBorder?: boolean;
    /**
     * Vertical borders between columns
     */
    withColumnBorders?: boolean;
}
export {};
