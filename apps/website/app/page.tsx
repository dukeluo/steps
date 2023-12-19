import { allSteps, Step } from 'contentlayer/generated'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="grid gap-8 grid-cols-1">
        {allSteps.map((step: Readonly<Step>) => (
          <div className="mb-8" key={step.url}>
            <h2 className="text-xl">
              <Link href={step.url} className="text-blue-700 hover:text-blue-900">
                {step.title}
              </Link>
            </h2>
            <time dateTime={step.dateCreated} className="block mb-2 text-xs text-gray-600">
              {new Date(step.dateCreated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        ))}
      </div>
    </main>
  )
}
