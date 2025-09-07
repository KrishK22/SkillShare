import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({}),
    Credentials({}),
  ],
  pages: {
    signIn: "/login",
  }
})