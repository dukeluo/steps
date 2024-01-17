import { allSteps } from 'contentlayer/generated'

import { Search } from '@/components/search'
import { StepCategories } from '@/components/stepCategories'
import { StepInfo } from '@/components/stepInfo'
import { getCategories } from '@/utils/step'

export default function Home() {
  const categories = getCategories()

  return (
    <article>
      <header className="mb-6 flex flex-col space-y-2">
        <Search />
        <StepCategories items={categories} />
      </header>
      {allSteps.map((step) => (
        <StepInfo step={step} key={step._id} />
      ))}
    </article>
  )
}
