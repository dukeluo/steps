import { debug, getInput, info, setFailed } from '@actions/core'
import { createKysely } from '@vercel/postgres-kysely'

import { PostgresDatabase } from '~/postgres.storage'
import { addSteps, createActions, deleteSteps } from '~/step/step.service'

export async function run(): Promise<void> {
  try {
    const pathPattern: string = getInput('path')
    const db = createKysely<PostgresDatabase>()
    const [toBeAdded, toBeDeleted] = await createActions(db, pathPattern)

    info(`Steps are going to be added: ${JSON.stringify(toBeAdded)}`)
    await addSteps(db, toBeAdded)
    info('Done')

    info(`Steps are going to be deleted: ${JSON.stringify(toBeDeleted)}`)
    await deleteSteps(db, toBeDeleted)
    info('Done')
  } catch (e) {
    if (e instanceof Error) {
      debug(e.stack ?? '')
      setFailed(e.message)
    }
  }
}
