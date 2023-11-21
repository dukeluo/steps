import { debug, getInput, info, setFailed } from '@actions/core'
import { createKysely } from '@vercel/postgres-kysely'

import { PostgresDatabase } from '~/postgres.storage'
import { addSteps, createActions, deleteSteps } from '~/step/step.service'

export async function run(): Promise<void> {
  try {
    const pathPattern: string = getInput('path')
    const db = createKysely<PostgresDatabase>()
    const [toBeAdded, toBeDeleted] = await createActions(db, pathPattern)

    info(`Steps will be inserted: ${JSON.stringify(toBeAdded)}`)
    info(`Steps will be deleted: ${JSON.stringify(toBeDeleted)}`)

    await addSteps(db, toBeAdded)
    await deleteSteps(db, toBeDeleted)
  } catch (e) {
    if (e instanceof Error) {
      debug(e.stack ?? '')
      setFailed(e.message)
    }
  }
}
