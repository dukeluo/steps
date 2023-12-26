import { allSteps, Step } from 'contentlayer/generated'
import parse from 'html-react-parser'
import { notFound } from 'next/navigation'

export default function Step({ params }: Readonly<{ params: { slug: string } }>) {
  const { slug } = params

  const step = allSteps.find((s: Readonly<Step>) => s.url.includes(slug))

  if (!step) return notFound()

  return (
    <article className="max-w-sm md:max-w-3xl lg:max-w-4xl mx-auto prose">
      <h1>{step.title}</h1>
      {parse(step.body.html)}
    </article>
  )
}
