import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely'

export interface StepTable {
  id: Generated<string>
  pathname: string
  title: string
  category: string
  tags: string[]
  created_at: ColumnType<Date, string | undefined, never>
  modified_at: ColumnType<Date, string | undefined>
  file_url: string
  hash_digest: string
}

export type StepRow = Selectable<StepTable>
export type InsertableStepRow = Insertable<StepTable>
export type UpdateableStepRow = Updateable<StepTable>
