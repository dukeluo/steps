'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

export function Pagination({ totalPages, currentPage }: Readonly<PaginationProps>) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className="join">
      {new Array(totalPages).fill(0).map((_, index) => {
        const page = index + 1

        return (
          <button
            className={`btn join-item ${page === currentPage ? 'btn-active' : ''} btn-sm`}
            key={page}
            // eslint-disable-next-line functional/no-return-void
            onClick={() => router.push(createPageURL(page))}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}
