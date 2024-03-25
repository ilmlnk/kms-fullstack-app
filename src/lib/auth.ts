import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from "./db";
import { compare } from 'bcrypt';
import bcrypt from 'bcrypt';


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
        if (!credentials) return null;

        const { username, password } = credentials;

        const user = await db.user.findFirst({
          where: {
            username: username,
          }
        });
        if (!user || !user.password || !bcrypt.compareSync(password, user.password)) {
          return null;
        } else {
          return {
            id: user.id,
            username: user.username,
            role: user.role,
          }
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
}