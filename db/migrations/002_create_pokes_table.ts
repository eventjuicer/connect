import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('Poke')
    .addColumn('id', 'serial', (col) => col.primaryKey().autoIncrement())
    .addColumn('user_id', 'uuid', (col) => 
      col.references("User.id").onDelete("cascade").notNull()
    )
    .addColumn('poked_id', 'integer', (col) => col.notNull())
    .addColumn('status', 'integer', (col) => col.notNull().defaultTo(0))
    .addColumn('created_at', 'timestamptz', (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
    )
    .addColumn('edited_at', 'timestamptz', (col) =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
    )
    .execute()

  // Add unique constraint
  await db.schema
    .alterTable('Poke')
    .addUniqueConstraint('pokes_poker_id_poked_id_unique', ['user_id', 'poked_id'])
    .execute()

  // Add indexes
  await db.schema
    .createIndex('poke_poker_id_idx')
    .on('Poke')
    .column('user_id')
    .execute()

  await db.schema
    .createIndex('poke_poked_id_idx')
    .on('Poke')
    .column('poked_id')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('Poke').execute()
} 