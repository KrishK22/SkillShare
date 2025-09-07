import NextAuth, { CredentialsSignin } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "./lib/Prisma";
import { compare } from 'bcryptjs'


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      authorize: async (Credentials) => {
        const email = Credentials.email as string | undefined;
        const password = Credentials.password as string | undefined;



        if (!email || !password) {
          throw new CredentialsSignin("Please provide email and password")
        }


        const user = await prisma.user.findFirst({
          where: { email }
        })


        if (!user) {
          throw new CredentialsSignin("Invalid Email or Password")
        }
        if (!user.password) {
          throw new CredentialsSignin("Invalid Email or Password")
        }

        const isMatch = await compare(password, user.password);

        if (!isMatch) {
          throw new CredentialsSignin("Invalid Email or Password")
        }

        return { name: user.name, email: user.email }

      }
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, id, image, name } = user;
          if (!email) return false;
          const alreadyExists = await prisma.user.findFirst({
            where: { email: email as string }
          });
          if (!alreadyExists) {
            await prisma.user.create({
              data: {
                email: email as string,
                id: typeof id === 'number' ? id : undefined,
                profilePic: image ?? '',
                name: name ?? '',
                password: '' // Set a default empty password for Google users
              }
            });
          }
          return true;
        } catch (error) {
          return false;
        }
      }
      return true;
    }
  }
})