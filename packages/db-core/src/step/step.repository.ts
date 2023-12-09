import { Kysely } from 'kysely'

import { Database } from '~/index'
import { InsertableStepRow, StepRow } from '~/step/step.table'

export async function insertStep(db: Kysely<Database>, step: Readonly<InsertableStepRow>): Promise<StepRow> {
  const insertedStep = await db.insertInto('step').values(step).returningAll().executeTakeFirstOrThrow()

  return insertedStep
}

export async function findStepById(db: Kysely<Database>, id: string): Promise<StepRow | undefined> {
  const step = await db.selectFrom('step').where('id', '=', id).selectAll('step').executeTakeFirst()

  return step
}

export async function findStepByHashDigest(db: Kysely<Database>, hashDigest: string): Promise<StepRow | undefined> {
  const step = await db.selectFrom('step').where('hash_digest', '=', hashDigest).selectAll('step').executeTakeFirst()

  return step
}

export async function findAllSteps(db: Kysely<Database>): Promise<StepRow[]> {
  return await db.selectFrom('step').selectAll().execute()
}

export async function deleteStepsByIds(db: Kysely<Database>, ids: readonly string[]): Promise<void> {
  await db.deleteFrom('step').where('id', 'in', ids).execute()
}
