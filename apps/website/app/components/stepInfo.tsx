import { Step } from 'contentlayer/generated'
import Link from 'next/link'

import { formatLocally } from '@/utils/date'

interface StepInfoProps {
  step: Step
}

export function StepInfo({ step }: Readonly<StepInfoProps>) {
  return (
    <article className="mb-8 last:mb-0">
      <h2 className="text-xl">
        <Link href={step.url}>{step.title}</Link>
      </h2>
      <time dateTime={step.dateCreated} className="text-sm text-accent">
        {formatLocally(step.dateCreated)}
      </time>
    </article>
  )
}
