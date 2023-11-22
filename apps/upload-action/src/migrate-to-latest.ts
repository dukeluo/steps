import { readdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'

import { createKysely } from '@vercel/postgres-kysely'
import { Migration, Migrator } from 'kysely'

class FileMigrationProvider {
  #folder: string

  constructor(folder: string) {
    this.#folder = folder
  }

  async getMigrations(): Promise<Record<string, Migration>> {
    const migrations: Record<string, Migration> = {}
    const files = await readdir(this.#folder)

    for await (const file of files) {
      migrations[file] = await import(join(this.#folder, file))
    }

    return migrations
  }
}

async function migrateToLatest() {
  const db = createKysely()

  // https://github.com/vercel/storage/issues/325#issuecomment-1680858882
  Object.defineProperty(db.getExecutor().adapter, 'supportsTransactionalDdl', () => false)

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider(resolve('./migrations')),
  })

  const { error, results } = await migrator.migrateToLatest()

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

migrateToLatest()
