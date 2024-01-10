import { allSteps } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import { StepCategories } from '@/app/components/stepCategories'
import { StepInfo } from '@/app/components/stepInfo'
import { getCategories } from '@/utils/step'

export default function Category({ params }: Readonly<{ params: { slug: string } }>) {
  const { slug: category } = params
  const categories = getCategories()

  if (!categories.find((c) => c === category)) return notFound()

  const steps = allSteps.filter((s) => s.category === category)

  return (
    <article>
      <header className="mb-6">
        <StepCategories items={categories} />
      </header>
      {steps.map((step) => (
        <StepInfo step={step} key={step._id} />
      ))}
    </article>
  )
}
