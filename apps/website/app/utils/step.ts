import { allSteps } from 'contentlayer/generated'

import { CATEGORY_ALL } from '@/app/utils/constants'

export function getCategories() {
  const stepCategories = allSteps.reduce(
    (acc, { category }) => (acc.find((v) => v === category) ? acc : [...acc, category]),
    [] as string[]
  )

  return [CATEGORY_ALL, ...stepCategories]
}
