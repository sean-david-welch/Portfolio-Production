import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET!,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    callbacks: {
        async session({ token, session }) {
            if (token && session?.user) {
                session.user.role = token.role;
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.name = token.name;
                session.user.image = token.picture;
            }
            return session;
        },
        async jwt({ token, user }) {
            const dbUser = await prisma.user.findFirst({
                where: {
                    email: token?.email,
                },
            });

            if (dbUser) {
                token.id = dbUser.id;
                token.email = dbUser.email;
                token.name = dbUser.name;
                token.image = dbUser.image;
                token.role = dbUser.role;
            } else if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.image = user.image;
                token.role = user.role;
            }

            return token;
        },
    },
};
