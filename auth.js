import NextAuth from "next-auth"
import Resend from "next-auth/providers/resend"
import { KyselyAdapter } from "@/db/kysely-authjs-adapter"
import {db} from "@/db/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Resend({
    from: "adam@ecommercewarsaw.com"
  })],
  adapter: KyselyAdapter(db),
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      return session
    },
    // authorized: async ({ auth }) => {
    //   // Logged in users are authenticated, otherwise redirect to login page
    //   return !!auth
    // },
  }
})