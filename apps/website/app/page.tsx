import { getAllSteps } from '@/utils/step'

export const revalidate = 86400

export default async function Home() {
  const steps = await getAllSteps()

  return (
    <main>
      <div className="grid gap-8 grid-cols-1">
        {steps.map((step) => (
          <div key={step.id} className="border border-gray-200 rounded-lg">
            <div className="bg-gray-100 px-4 py-2 font-medium">
              <a>{step.title}</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
