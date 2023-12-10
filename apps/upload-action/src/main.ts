import { debug, getInput, info, setFailed } from '@actions/core'
import client from '@steps/db-core'

import { addSteps, createActions, deleteSteps } from '~/services/step'

export async function run(): Promise<void> {
  try {
    const pathPattern: string = getInput('path')
    const [toBeAdded, toBeDeleted] = await createActions(client, pathPattern)

    info(`Steps are going to be added: ${JSON.stringify(toBeAdded)}`)
    await addSteps(client, toBeAdded)
    info('Done')

    info(`Steps are going to be deleted: ${JSON.stringify(toBeDeleted)}`)
    await deleteSteps(client, toBeDeleted)
    info('Done')
  } catch (e) {
    if (e instanceof Error) {
      debug(e.stack ?? '')
      setFailed(e.message)
    }
  }
}
