import { createKysely } from '@vercel/postgres-kysely'
import { Kysely } from 'kysely'

import { StepTable } from '~/step/step.table'

export interface Database {
  step: StepTable
}

declare global {
  // eslint-disable-next-line no-var
  var kysely: undefined | Kysely<Database>
}

const kyselyClientSingleton = () => createKysely<Database>()

const kysely = globalThis.kysely ?? kyselyClientSingleton()

export default kysely

// eslint-disable-next-line functional/immutable-data
if (process.env.NODE_ENV !== 'production') globalThis.kysely = kysely
