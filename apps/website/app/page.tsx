import { allSteps, Step } from 'contentlayer/generated'
import Link from 'next/link'

import { formatLocally } from '@/utils/date'

export default function Home() {
  return (
    <section>
      {allSteps.map((step: Readonly<Step>) => (
        <article className="mb-8" key={step.url}>
          <h2 className="text-xl">
            <Link href={step.url}>{step.title}</Link>
          </h2>
          <time dateTime={step.dateCreated} className="text-sm text-accent">
            {formatLocally(step.dateCreated)}
          </time>
        </article>
      ))}
    </section>
  )
}
