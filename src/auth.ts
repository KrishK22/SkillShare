import NextAuth, { CredentialsSignin } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "./lib/Prisma";
import { compare } from 'bcryptjs'
import { signInSchema } from "./lib/zod";
import { ZodError } from "zod";
import { toast } from "sonner";

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
      authorize: async (credentials) => {
        try {
          // ✅ Validate input
          const { email, password } = await signInSchema.parseAsync(credentials);

          const user = await prisma.user.findFirst({ where: { email } });

          if (!user || !user.password) {
            throw new CredentialsSignin("Invalid Email or Password");
          }

          const isMatch = await compare(password, user.password);
          if (!isMatch) {
            throw new CredentialsSignin("Invalid Email or Password");
          }

          return { id: user.id, name: user.name, email: user.email };
        } catch (err) {
          if (err instanceof ZodError) {
            // rethrow first validation error so NextAuth can pass it to client
            throw new CredentialsSignin(err.issues[0].message);
          }
          throw new CredentialsSignin("Something went wrong");
        }
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