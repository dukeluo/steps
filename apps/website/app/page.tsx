import { Pagination } from '@/components/pagination'
import { Search } from '@/components/search'
import { StepCategories } from '@/components/stepCategories'
import { StepInfo } from '@/components/stepInfo'
import { getCategories, getStepsByPage, getTotalPages } from '@/utils/step'

export default function Home({ searchParams }: Readonly<{ searchParams?: { page?: string } }>) {
  const categories = getCategories()
  const currentPage = Number(searchParams?.page ?? 1)
  const steps = getStepsByPage(currentPage)
  const pages = getTotalPages()

  return (
    <article>
      <header className="mb-6 flex flex-col space-y-2">
        <Search />
        <StepCategories items={categories} />
      </header>
      {steps.map((step) => (
        <StepInfo step={step} key={step._id} />
      ))}
      <div className="flex justify-center">
        <Pagination totalPages={pages} currentPage={currentPage} />
      </div>
    </article>
  )
}
