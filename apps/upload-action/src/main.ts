import { debug, getInput, setFailed } from '@actions/core'
import { createKysely } from '@vercel/postgres-kysely'

import { PostgresDatabase } from '~/postgres.storage'
import { addSteps, createActions, deleteSteps } from '~/step/step.service'

export async function run(): Promise<void> {
  try {
    const pathPattern: string = getInput('path')
    const db = createKysely<PostgresDatabase>()
    const [toBeAdded, toBeDeleted] = await createActions(db, pathPattern)

    debug(`Files need to be inserted: ${JSON.stringify(toBeAdded)}`)
    debug(`Files need to be deleted: ${JSON.stringify(toBeDeleted)}`)

    await addSteps(db, toBeAdded)
    await deleteSteps(db, toBeDeleted)
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message)
    }
  }
}
