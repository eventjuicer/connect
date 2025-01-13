import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('pokes')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('poker_id', 'uuid', (col) => col.notNull())
    .addColumn('poked_id', 'integer', (col) => col.notNull())
    .addColumn('created_at', 'timestamptz', (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .execute()

  // Add unique constraint
  await db.schema
    .alterTable('pokes')
    .addUniqueConstraint('pokes_poker_id_poked_id_unique', ['poker_id', 'poked_id'])
    .execute()

  // Add indexes
  await db.schema
    .createIndex('pokes_poker_id_idx')
    .on('pokes')
    .column('poker_id')
    .execute()

  await db.schema
    .createIndex('pokes_poked_id_idx')
    .on('pokes')
    .column('poked_id')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('pokes').execute()
} 