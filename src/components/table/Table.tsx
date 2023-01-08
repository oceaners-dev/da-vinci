import React, { forwardRef, useEffect, useState } from 'react'
import uuid from 'react-uuid'
import { SvgX } from '../../utils/svg'
import { Button } from '../button/Button'
import { Card } from '../card-UNFINISHED/Card'
import { Input } from '../input/Input'
import { Pagination } from '../pagination/Pagination'
import { Space } from '../space/Space'
import { SvgSearch, SvgSort } from './svg'

export interface TableProps {
  cols: TableCol[]
  currentPage?: number
  highlightOnHover?: boolean
  maxRows?: number
  onPageChange?: (page: number) => void
  pagination?: {
    currentPage?: number
    maxPaginationCount?: number
    totalPageCount?: number
  }
  rows: any[]
  stripedHorizontal?: boolean
  stripedVertical?: boolean
  withBorder?: boolean
  withColumnBorders?: boolean
  withPagination?: boolean
}

type TableCol = {
  render?: () => JSX.Element
  search?: boolean
  sorter?: (a: any, b: any) => number
  title?: string
  width?: string
}

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
    withPagination, // ✅
    onPageChange, // ✅
    pagination = {
      maxPaginationCount: 7,
    },
  } = props

  const [current, setCurrent] = useState(currentPage ? currentPage : 1)
  const [showingRows, setShowingRows] = useState<typeof rows>()
  const [rowsState, setRowsState] = useState<typeof rows>()
  const [updateTable, setUpdateTable] = useState<string>()
  const [searchInput, setSearchInput] = useState<string>()

  useEffect(() => {
    if (!rows) return
    setRowsState(rows)
  }, [rows])

  useEffect(() => {
    if (!rowsState || !current) return

    setShowingRows(
      rowsState.slice(
        (current - 1) * maxRows!,
        (current - 1) * maxRows! + maxRows!,
      ),
    )
  }, [rowsState, current, updateTable])

  return (
    <div className="flex flex-col">
      <table className="w-full table-auto">
        <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
          <tr
            className={`${cols[0].width ? 'flex flex-row items-center' : ''}`}
          >
            {cols &&
              cols.map((col) => {
                return (
                  <th
                    key={uuid()}
                    className={`whitespace-nowrap p-2 ${col.width || ''}`}
                  >
                    <div className="flex flex-row items-center gap-[2px]">
                      {!col.render && col.title && (
                        <div className="text-left font-semibold">
                          {col.title}
                        </div>
                      )}
                      {col.render && col.render()}

                      {col.sorter && (
                        <button
                          className="leading-none"
                          onClick={() => {
                            setRowsState(rowsState?.sort(col.sorter))
                            setUpdateTable(uuid())
                            // reverse if already sorted
                            if (
                              rowsState?.[0][col.title] ===
                              showingRows![0][col.title]
                            ) {
                              setRowsState(rowsState?.reverse())
                              setUpdateTable(uuid())
                            }
                          }}
                        >
                          <SvgSort />
                        </button>
                      )}
                      {col.search && (
                        // TODO: change this with portal
                        <div className="relative h-fit w-fit leading-none">
                          <input
                            id="modal"
                            className="peer/modal hidden"
                            type="checkbox"
                            name="status"
                          />
                          <label
                            htmlFor="modal"
                            className="cursor-pointer peer-checked/modal:flex"
                          >
                            <SvgSearch />
                          </label>

                          <Card className="absolute top-7 left-2 hidden !w-fit flex-col gap-2 bg-white peer-checked/modal:flex">
                            <div className="relative flex h-full w-full flex-row items-center gap-1">
                              <Input
                                placeholder="Search"
                                value={searchInput}
                                onChange={(e) => {
                                  setSearchInput(e.target.value)
                                }}
                              />
                              <button
                                onClick={() => {
                                  setRowsState(rows)
                                  setSearchInput('')
                                }}
                              >
                                <label
                                  htmlFor="modal"
                                  className="peer-checked/modal:flex"
                                >
                                  <SvgX className="h-4 w-4 cursor-pointer" />
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
                                        .includes(searchInput?.toLowerCase())
                                    }),
                                  )
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
                )
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
                  key={uuid()}
                  className={
                    `${cols[0].width ? 'flex flex-row items-center' : ''}` +
                    ' ' +
                    `${stripedVertical ? 'odd:bg-gray-100' : ''}` +
                    ' ' +
                    `${
                      highlightOnHover
                        ? stripedHorizontal
                          ? 'hover:outline-solid hover:outline hover:outline-gray-300'
                          : 'hover:bg-gray-100'
                        : ''
                    }`
                  }
                >
                  {cols &&
                    cols.map((col) => {
                      return (
                        <td
                          key={uuid()}
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
                      )
                    })}
                </tr>
              )
            })}
        </tbody>
      </table>
      <Space direction="vertical" />
      {withPagination && (
        <Pagination
          total={
            pagination
              ? pagination.totalPageCount
                ? pagination.totalPageCount
                : rows.length
              : rows.length
          }
          current={current}
          perPage={maxRows}
          maxPageCount={pagination.maxPaginationCount}
          onChange={(page) => {
            setCurrent(page)
            if (onPageChange) {
              onPageChange(page)
            }
          }}
        />
      )}
    </div>
  )
})

Table.defaultProps = {
  currentPage: 1,
  maxRows: 15,
  withBorder: true,
  withPagination: true,
}
