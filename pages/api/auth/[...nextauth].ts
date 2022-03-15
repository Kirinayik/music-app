import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify"

export default NextAuth({
  providers: [
    SpotifyProvider({
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,user-top-read,user-follow-read',
      // @ts-ignore
      clientId: process.env.SPOTIFY_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    })
  ],
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        token.accessToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    }
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET
})