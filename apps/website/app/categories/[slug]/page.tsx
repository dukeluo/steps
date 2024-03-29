import { allSteps } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import { Search } from '@/components/search'
import { StepCategories } from '@/components/stepCategories'
import { StepInfo } from '@/components/stepInfo'
import { getCategories } from '@/utils/step'

export default function Category({ params }: Readonly<{ params: { slug: string } }>) {
  const category = params.slug.replaceAll('-', ' ')
  const categories = getCategories()

  if (!categories.find((c) => c === category)) return notFound()

  const steps = allSteps.filter((s) => s.category === category)

  return (
    <article>
      <header className="mb-6 flex flex-col space-y-2">
        <Search />
        <StepCategories items={categories} />
      </header>
      {steps.map((step) => (
        <StepInfo step={step} key={step._id} />
      ))}
    </article>
  )
}
