
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRETS,
      scope: 'read:user'
    }),
  ],
})

