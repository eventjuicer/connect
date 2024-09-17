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
    async session({ session, user }) {

      try {
        const response = await fetch(`https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/connect/${user.email}`)

        const tokensOrError = await response.json()
        if (!response.ok) throw tokensOrError
  

        console.log(tokensOrError)

        session.user.id = user.id
        return session


      }  catch (error) {
          console.error("Error refreshing access_token", error)
          // If we fail to refresh the token, return an error so we can handle it on the page
          session.error = "RefreshTokenError"
      }
      
      
    },
    
    // authorized: async ({ auth }) => {
    //   // Logged in users are authenticated, otherwise redirect to login page
    //   return !!auth
    // },
  }
})



/**
 * 
 
{
  session: {
    sessionToken: 'dcdf4d13......8d68d',
    userId: '10aaa098....59-3a4953e1d519',
    expires: 2024-10-16T16:33:00.379Z,
    user: {
      id: '10aaa098-....a4953e1d519',
      name: 'Adam Zygadlewicz',
      email: 'adam@zygadlewicz.com',
      emailVerified: 2024-09-16T16:33:00.321Z,
      image: 'https://media.licdn.com/dms/image/v2/C5603AQEK3vjvDioFYg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516241692527?e=2147483647&v=beta&t=tL6Qs-JP4yKIFu5dI8JtOt_KnAwWBQ_-9HQ4fu1G55I'
    }
  },
  user: {
    id: '10aaa09...3a4953e1d519',
    name: 'Adam Zygadlewicz',
    email: 'adam@xxxx.com',
    emailVerified: 2024-09-16T16:33:00.321Z,
    image: 'https://media.licdn.com/dms/image/v2/C5603AQEK3vjvDioFYg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516241692527?e=2147483647&v=beta&t=tL6Qs-JP4yKIFu5dI8JtOt_KnAwWBQ_-9HQ4fu1G55I'
  }
    }

 */