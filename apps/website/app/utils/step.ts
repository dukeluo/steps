import { allSteps } from 'contentlayer/generated'

import { CATEGORY_ALL, PAGE_SIZE } from '@/utils/constants'

export function getCategories() {
  const stepCategories = allSteps.reduce(
    (acc, { category }) => (acc.find((v) => v === category) ? acc : [...acc, category]),
    [] as string[]
  )

  return [CATEGORY_ALL, ...stepCategories]
}

export function getTotalPages() {
  return Math.ceil(allSteps.length / PAGE_SIZE)
}

export function getStepsByPage(page: number) {
  return allSteps.slice(PAGE_SIZE * (page - 1), PAGE_SIZE * page)
}
