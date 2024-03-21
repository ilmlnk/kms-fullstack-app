import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from "./db";
import { compare } from 'bcrypt';
import toast from "react-hot-toast";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login',
  },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            if (!credentials?.username || !credentials?.password) {
              return null
          }
          const existingUser = await db.user.findFirst({
            where: {
              username: credentials.username
            }
          })

          if (!existingUser) {
            toast.error("User not found");
            return null
          }

          const passwordMatch = await compare(credentials.password, 
            existingUser.password);

          if (!passwordMatch) {
            toast.error("Incorrect password");
            return null;
          }
          return {
            id: `${existingUser.id}`,
            username: existingUser.username,
            email: existingUser.email,
            phone_number: existingUser.phone_number,
          }
        }
        })
      ]
}