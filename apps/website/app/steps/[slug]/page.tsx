import { allSteps, Step } from 'contentlayer/generated'
import parse from 'html-react-parser'
import { notFound } from 'next/navigation'

import { formatLocally, formatRelative } from '@/utils/date'

export default function Step({ params }: Readonly<{ params: { slug: string } }>) {
  const { slug } = params

  const step = allSteps.find((s: Readonly<Step>) => s.url.includes(slug))

  if (!step) return notFound()

  return (
    <article className="prose max-w-full">
      <p className="text-sm text-accent">
        Created at{' '}
        <time dateTime={step.dateCreated} title={formatLocally(step.dateCreated)}>
          {formatRelative(step.dateCreated)}
        </time>
        {step.dateModified && (
          <>
            , modified at{' '}
            <time dateTime={step.dateModified} title={formatLocally(step.dateModified)}>
              {formatRelative(step.dateModified)}
            </time>
          </>
        )}
      </p>
      <h1>{step.title}</h1>
      {parse(step.body.html)}
    </article>
  )
}
