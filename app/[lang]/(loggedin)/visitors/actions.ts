'use server'

import { db } from '@/db/db'
import { auth } from '@/auth'
import { revalidatePath } from 'next/cache'

export async function createPoke(pokedId: number) {
  const session = await auth()
  if (!session?.user?.id) {
    throw new Error('Not authenticated')
  }

  try {
    await db
      .insertInto('Poke')
      .values({
        user_id: session.user.id,
        poked_id: pokedId,
        status: 0,
        created_at: new Date()
      })
      .execute()

    revalidatePath('/visitors')
    return { success: true }
  } catch (error) {
    // Handle unique constraint violation
    if (error.code === '23505') {
      return { success: false, error: 'Already poked this user' }
    }
    throw error
  }
}

export async function getPokedUsers(userId: string) {
  return await db
    .selectFrom('Poke')
    .select(['poked_id', 'created_at'])
    .where('user_id', '=', userId)
    .execute()
} 