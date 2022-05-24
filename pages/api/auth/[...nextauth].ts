import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

// eslint-disable-next-line new-cap
export default NextAuth({
  providers: [
    // eslint-disable-next-line new-cap
    SpotifyProvider({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,user-top-read,user-follow-read,user-library-read,streaming",
      // @ts-ignore
      clientId: process.env.SPOTIFY_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
