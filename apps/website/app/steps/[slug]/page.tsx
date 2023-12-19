import { allSteps, Step } from 'contentlayer/generated'

export default function Step({ params }: Readonly<{ params: { slug: string } }>) {
  const { slug } = params

  const step = allSteps.find((s: Readonly<Step>) => s.url.includes(slug))

  if (!step) return null

  return (
    <div>
      <h1>{step.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: step.body.html }} />
    </div>
  )
}
