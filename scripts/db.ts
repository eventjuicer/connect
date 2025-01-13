import { Kysely } from "kysely"
import { NeonDialect } from "kysely-neon"
import { DB } from '@/db/kysely-types'
import ws from 'ws';


// if (process.env.NEXT_RUNTIME === 'nodejs') {} 

export const dialect = new NeonDialect({
    connectionString: process.env.DATABASE_URL,
    webSocketConstructor: ws,
})

export const db = new Kysely<DB>({dialect})