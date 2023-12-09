import { StepTable } from '~/step/step.table'

export * from '~/step/step.repository'

export interface Database {
  step: StepTable
}
