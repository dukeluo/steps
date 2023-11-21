import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<never>): Promise<void> {
  await db.schema
    .createTable('step')
    .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('pathname', 'text')
    .addColumn('title', 'text')
    .addColumn('category', 'text')
    .addColumn('tags', sql`text[]`)
    .addColumn('created_at', 'date')
    .addColumn('modified_at', 'date')
    .addColumn('file_url', 'text')
    .addColumn('hash_digest', 'text')
    .execute()
}

export async function down(db: Kysely<never>): Promise<void> {
  await db.schema.dropTable('step').execute()
}
