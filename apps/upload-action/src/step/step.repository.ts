import { Kysely } from 'kysely'

import { PostgresDatabase } from '~/postgres.storage'
import { InsertableStepRow, StepRow } from '~/step/step.table'

export async function insertStep(db: Kysely<PostgresDatabase>, step: InsertableStepRow): Promise<StepRow> {
  const insertedStep = await db.insertInto('step').values(step).returningAll().executeTakeFirstOrThrow()

  return insertedStep
}

export async function findStepById(db: Kysely<PostgresDatabase>, id: string): Promise<StepRow | undefined> {
  const step = await db.selectFrom('step').where('id', '=', id).selectAll('step').executeTakeFirst()

  return step
}

export async function findStepByHashDigest(
  db: Kysely<PostgresDatabase>,
  hashDigest: string
): Promise<StepRow | undefined> {
  const step = await db.selectFrom('step').where('hash_digest', '=', hashDigest).selectAll('step').executeTakeFirst()

  return step
}

export async function findAllSteps(db: Kysely<PostgresDatabase>): Promise<StepRow[]> {
  return await db.selectFrom('step').selectAll().execute()
}

export async function deleteStepsByIds(db: Kysely<PostgresDatabase>, ids: string[]): Promise<void> {
  await db.deleteFrom('step').where('id', 'in', ids).execute()
}
