/* eslint-disable no-console */
import { readdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'

import { createKysely } from '@vercel/postgres-kysely'
import { Migration, Migrator } from 'kysely'

// eslint-disable-next-line functional/no-classes
class FileMigrationProvider {
  readonly #folder: string

  constructor(folder: string) {
    this.#folder = folder
  }

  async getMigrations(): Promise<Record<string, Migration>> {
    const files = await readdir(this.#folder)
    const migrations = files.reduce(
      async (acc, file) => ({
        ...acc,
        [file]: (await import(join(this.#folder, file))) as Migration,
      }),
      {}
    )

    return migrations
  }
}

async function migrateToLatest() {
  const db = createKysely()

  // https://github.com/vercel/storage/issues/325#issuecomment-1680858882
  // eslint-disable-next-line functional/immutable-data
  Object.defineProperty(db.getExecutor().adapter, 'supportsTransactionalDdl', () => false)

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider(resolve('./migrations')),
  })

  const { error, results } = await migrator.migrateToLatest()

  // eslint-disable-next-line functional/no-return-void
  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`migration "${it.migrationName}" was executed successfully`)
    } else if (it.status === 'Error') {
      console.error(`failed to execute migration "${it.migrationName}"`)
    }
  })

  if (error) {
    console.error('failed to migrate')
    console.error(error)
    process.exit(1)
  }

  await db.destroy()
}

void migrateToLatest()
