'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CATEGORY_ALL } from '@/utils/constants'

interface StepCategoriesProps {
  items: string[]
}

export function StepCategories({ items }: Readonly<StepCategoriesProps>) {
  const pathname = usePathname()

  return (
    <section className="flex flex-wrap justify-start">
      {items.map((item) => (
        <span
          key={item}
          className={`badge badge-lg m-1 ${
            pathname.replaceAll('-', ' ').includes(item) || (item === CATEGORY_ALL && pathname === '/')
              ? 'badge-secondary'
              : ''
          }`}
        >
          <span>
            <Link href={item === CATEGORY_ALL ? '/' : `/categories/${item.replaceAll(' ', '-')}`}>{item}</Link>
          </span>
        </span>
      ))}
    </section>
  )
}
