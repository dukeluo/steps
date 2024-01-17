/* eslint-disable functional/no-return-void */
'use client'

import { lazy, useEffect, useState } from 'react'
import { createPortal, preconnect } from 'react-dom'
import { FaSistrix } from 'react-icons/fa6'

const LazyDocSearchModal = lazy(() =>
  import('@docsearch/react').then(({ DocSearchModal }) => ({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    default: DocSearchModal,
  }))
)

export function Search() {
  const [openSearch, setOpenSearch] = useState(false)

  const openModal = () => setOpenSearch(true)
  const closeModal = () => setOpenSearch(false)

  useEffect(() => {
    const onKeyDown = (event: Readonly<KeyboardEvent>) => {
      const active = document.body.classList.contains('DocSearch--active')

      if (event.key === 'Escape' && active) {
        event.preventDefault()
        closeModal()
      }
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        if (active) {
          closeModal()
        } else {
          openModal()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  preconnect(`https://${process.env.NEXT_PUBLIC_DOC_SEARCH_APP_ID}-dsn.algolia.net`, { crossOrigin: 'anonymous' })

  return (
    <>
      <button
        className="flex w-full items-center rounded-lg border bg-base-200 px-3 py-2 opacity-60"
        onClick={openModal}
      >
        <FaSistrix className="mr-3" />
        Quick search steps...
        <span className="ml-auto flex">
          <kbd className="mr-1 inline-flex h-5 w-5 items-center justify-center rounded bg-accent">⌘</kbd>
          <kbd className="inline-flex h-5 w-5 items-center justify-center rounded bg-accent">K</kbd>
        </span>
      </button>
      {openSearch &&
        createPortal(
          <LazyDocSearchModal
            appId={process.env.NEXT_PUBLIC_DOC_SEARCH_APP_ID ?? ''}
            apiKey={process.env.NEXT_PUBLIC_DOC_SEARCH_API_KEY ?? ''}
            indexName={process.env.NEXT_PUBLIC_DOC_SEARCH_INDEX_NAME ?? ''}
            insights={true}
            initialScrollY={window.scrollY}
            placeholder="Search steps"
            onClose={closeModal}
          />,
          document.body
        )}
    </>
  )
}
