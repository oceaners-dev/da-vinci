import React, { forwardRef, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { SvgX } from '../../utils/svg';
import { Button } from '../button/Button';
import { Card } from '../card-UNFINISHED/Card';
import { Input } from '../input/Input';
import { Pagination } from '../pagination/Pagination';
import { Space } from '../space/Space';
import { SvgSearch, SvgSort } from './svg';

export const Table = forwardRef<HTMLDivElement, TableProps>((props, ref) => {
  const {
    cols, // ✅
    rows, // ✅
    withBorder, // ✅
    highlightOnHover, // ✅
    stripedHorizontal, // ✅
    stripedVertical, // ✅
    withColumnBorders, // 🚨
    maxRows, // ✅
    currentPage, // ✅
    hidePagination, // ✅
    onPageChange, // ✅
  } = props;

  const [current, setCurrent] = useState(currentPage ? currentPage : 1);
  const [showingRows, setShowingRows] = useState<typeof rows>();
  const [rowsState, setRowsState] = useState<typeof rows>();
  const [updateTable, setUpdateTable] = useState<string>();
  const [searchInput, setSearchInput] = useState<string>();

  useEffect(() => {
    if (!rows) return;
    setRowsState(rows);
  }, [rows]);

  useEffect(() => {
    if (!rowsState || !current) return;

    setShowingRows(
      rowsState.slice(
        (current - 1) * maxRows!,
        (current - 1) * maxRows! + maxRows!,
      ),
    );
  }, [rowsState, current, updateTable]);

  return (
    <div className="flex flex-col">
      <table className="table-auto w-full">
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr
            className={`${cols[0].width ? 'flex flex-row items-center' : ''}`}
          >
            {cols &&
              cols.map((col) => {
                return (
                  <th
                    key={col.title}
                    className={`p-2 whitespace-nowrap ${col.width || ''}`}
                  >
                    <div className="flex flex-row items-center gap-[2px]">
                      {!col.render && col.title && (
                        <div className="font-semibold text-left">
                          {col.title}
                        </div>
                      )}
                      {col.render && col.render()}

                      {col.sorter && (
                        <button
                          className="leading-none"
                          onClick={() => {
                            setRowsState(rowsState?.sort(col.sorter));
                            setUpdateTable(uuid());
                            // reverse if already sorted
                            if (
                              rowsState?.[0][col.title] ===
                              showingRows![0][col.title]
                            ) {
                              setRowsState(rowsState?.reverse());
                              setUpdateTable(uuid());
                            }
                          }}
                        >
                          <SvgSort />
                        </button>
                      )}
                      {col.search && (
                        // TODO: change this with portal
                        <div className="relative w-fit h-fit leading-none">
                          <input
                            id="modal"
                            className="peer/modal hidden"
                            type="checkbox"
                            name="status"
                          />
                          <label
                            htmlFor="modal"
                            className="peer-checked/modal:flex cursor-pointer"
                          >
                            <SvgSearch />
                          </label>

                          <Card className="hidden peer-checked/modal:flex absolute top-7 !w-fit left-2 bg-white flex-col gap-2">
                            <div className="relative w-full h-full flex flex-row items-center gap-1">
                              <Input
                                placeholder="Search"
                                value={searchInput}
                                onChange={(e) => {
                                  setSearchInput(e.target.value);
                                }}
                              />
                              <button
                                onClick={() => {
                                  setRowsState(rows);
                                  setSearchInput('');
                                }}
                              >
                                <label
                                  htmlFor="modal"
                                  className="peer-checked/modal:flex"
                                >
                                  <SvgX className="w-4 h-4 cursor-pointer" />
                                </label>
                              </button>
                            </div>
                            <div>
                              <Button
                                onClick={() => {
                                  setRowsState(
                                    rowsState?.filter((row) => {
                                      return row[col.title]
                                        .toLowerCase()
                                        .includes(searchInput?.toLowerCase());
                                    }),
                                  );
                                }}
                              >
                                Search
                              </Button>
                            </div>
                          </Card>
                        </div>
                      )}
                    </div>
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody
          className={`text-sm ${withBorder ? 'divide-y divide-gray-100' : ''}`}
        >
          {showingRows &&
            showingRows.map((row) => {
              return (
                <tr
                  key={row.name}
                  className={
                    `${cols[0].width ? 'flex flex-row items-center' : ''}` +
                    ' ' +
                    `${stripedVertical ? 'odd:bg-gray-100' : ''}` +
                    ' ' +
                    `${
                      highlightOnHover
                        ? stripedHorizontal
                          ? 'hover:outline-solid hover:outline-gray-300 hover:outline'
                          : 'hover:bg-gray-100'
                        : ''
                    }`
                  }
                >
                  {cols &&
                    cols.map((col) => {
                      return (
                        <td
                          key={col.title}
                          className={
                            'p-2 ' +
                            ' ' +
                            `${stripedHorizontal ? ' odd:bg-gray-200 ' : ''} ${
                              col.width || ''
                            }`
                          }
                        >
                          <div className="text-left">{row[col.title]}</div>
                        </td>
                      );
                    })}
                </tr>
              );
            })}
        </tbody>
      </table>
      <Space direction="vertical" />
      {!hidePagination && (
        <Pagination
          total={rows.length}
          current={current}
          perPage={maxRows}
          onChange={(page) => {
            setCurrent(page);
            if (onPageChange) {
              onPageChange(page);
            }
          }}
        />
      )}
    </div>
  );
});

Table.defaultProps = {
  withBorder: true,
  maxRows: 15,
  currentPage: 1,
  hidePagination: false,
};

type Row = { [key: string]: any };

export interface Column extends Pick<Row, any> {
  render?: (col?: Column) => React.ReactNode;
  // ✅
  search?: boolean;
  // ✅
  sorter?: (a: any, b: any) => number;
  // ✅
  title: string;
  /**
   * You can define responsive width classes for each column.
   */
  width?: string; // ✅
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
