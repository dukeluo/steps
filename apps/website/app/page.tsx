import { allSteps } from 'contentlayer/generated'

import { StepCategories } from '@/app/components/stepCategories'
import { StepInfo } from '@/app/components/stepInfo'
import { getCategories } from '@/app/utils/step'

export default function Home() {
  const categories = getCategories()

  return (
    <article>
      <header className="mb-6">
        <StepCategories items={categories} />
      </header>
      {allSteps.map((step) => (
        <StepInfo step={step} key={step._id} />
      ))}
    </article>
  )
}
