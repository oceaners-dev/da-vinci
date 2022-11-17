import { forwardRef, useEffect, useState } from 'react'
import { SvgLeftArrow, SvgRightArrow } from '../../utils/svg'
import Button from '../button/Button'

// TODO: seo optimization
// TODO: add siblings
export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const { className, current, total, perPage, maxPageCount, onChange } = props

    const [currentPage, setCurrentPage] = useState<number>(
      current ? current : 1,
    )

    useEffect(() => {
      if (!current) return
      setCurrentPage(current ? current : 1)
    }, [current])

    /**
     * How many pages are there in pagination
     */
    const paginationCount = Math.ceil(total / (perPage ? perPage : 1))
    const paginationArray = Array.from(
      { length: paginationCount },
      (_, i) => i + 1,
    )

    /**
     * Generate dynamic list for map
     */
    const [dynamicPaginationList, setDynamicPaginationList] =
      useState<number[]>()

    useEffect(() => {
      // If pagination count is less than max page count
      var maxPage = maxPageCount!
      if (maxPage % 2 === 0) {
        maxPage = maxPage - 1
      }
      if (paginationCount >= maxPage!) {
        if (currentPage <= maxPage! / 2) {
          setDynamicPaginationList(paginationArray.slice(0, maxPage))
        } else if (currentPage > paginationCount - maxPage! / 2) {
          setDynamicPaginationList(
            paginationArray.slice(paginationCount - maxPage!, paginationCount),
          )
        } else {
          setDynamicPaginationList(
            paginationArray.slice(
              currentPage - maxPage! / 2,
              currentPage + maxPage! / 2,
            ),
          )
        }
      } else {
        setDynamicPaginationList(paginationArray)
      }
    }, [currentPage])

    return (
      <div
        ref={ref}
        className={`flex flex-row items-center justify-center gap-1 ${className}`}
      >
        <Button
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage !== 1) {
              setCurrentPage(currentPage - 1)
              if (onChange) {
                onChange(currentPage - 1)
              }
            }
          }}
        >
          <SvgLeftArrow />
        </Button>
        {dynamicPaginationList &&
          dynamicPaginationList.map((page, index) => {
            const idx = index + 1
            return (
              <Button
                key={page}
                className={`${
                  page === currentPage
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-gray-100 text-gray-700'
                } w-10 `}
                onClick={() => {
                  if (onChange) {
                    onChange(Number(page))
                  }
                  setCurrentPage(Number(page))
                }}
              >
                {page}
              </Button>
            )
          })}
        <Button
          disabled={currentPage === paginationCount}
          onClick={() => {
            if (currentPage < paginationCount) {
              setCurrentPage(currentPage + 1)
              if (onChange) {
                onChange(currentPage + 1)
              }
            }
          }}
        >
          <SvgRightArrow />
        </Button>
      </div>
    )
  },
)

Pagination.defaultProps = {
  maxPageCount: 10,
}

export interface PaginationProps {
  /**
   * className for the whole component
   */
  className?: string // ✅
  current?: number // ✅
  total: number // ✅
  /**
   * If you set per page prop, `we can calculate page count automatically`.
   * Don't forget to set `total` prop too.
   */
  perPage?: number // ✅
  onChange?: (page: number) => void // ✅
  /**
   * For `limit` pagination item count. For example. if you have `30 pages` and
   * you `don't want to` have a pagination with 30 items, you can set `limit` prop to `5`.
   * It's `10` by default.
   */
  maxPageCount?: number // ✅
}
