import { usePagination } from 'oceaners-hooks'
import { forwardRef } from 'react'
import { SvgLeftArrow, SvgRightArrow } from '../../utils/svg'
import { Button } from '../button/Button'

// TODO: seo optimization
// TODO: add siblings
export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const { className, current, total, perPage, maxPageCount, onChange } = props
    const { pagination } = usePagination({
      currentPage: current,
      maxPaginationCount: maxPageCount,
      perPage,
      totalPageCount: total,
    })

    const goNext = () => {
      if (pagination && pagination.hasNext) {
        if (onChange) {
          onChange(pagination.currentPage + 1)
        }
      }
    }

    const goPrev = () => {
      if (pagination && pagination.hasPrev) {
        if (onChange) {
          onChange(pagination.currentPage - 1)
        }
      }
    }

    return (
      <div
        ref={ref}
        className={`flex flex-row items-center justify-center gap-1 ${className}`}
      >
        {pagination && (
          <Button disabled={!pagination.hasPrev} onClick={() => goPrev()}>
            <SvgLeftArrow />
          </Button>
        )}

        {pagination &&
          pagination.pages.map((page) => {
            return (
              <Button
                key={page}
                className={`${
                  page === pagination.currentPage
                    ? '!bg-gray-200 text-gray-800'
                    : '!bg-gray-100 text-gray-700'
                } w-10 `}
                onClick={() => {
                  if (onChange) {
                    onChange(Number(page))
                  }
                  onChange(Number(page))
                }}
              >
                {page}
              </Button>
            )
          })}

        {pagination && (
          <Button disabled={!pagination.hasNext} onClick={() => goNext()}>
            <SvgRightArrow />
          </Button>
        )}
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
  current?: number
  // ✅
  /**
   * For `limit` pagination item count. For example. if you have `30 pages` and
   * you `don't want to` have a pagination with 30 items, you can set `limit` prop to `5`.
   * It's `10` by default.
   */
  maxPageCount?: number
  // ✅
  onChange?: (page: number) => void
  // ✅
  /**
   * If you set per page prop, `we can calculate page count automatically`.
   * Don't forget to set `total` prop too.
   */
  perPage?: number
  // ✅
  total: number // ✅
}
