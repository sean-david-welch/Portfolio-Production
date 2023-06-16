import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import { prisma } from '@/lib/primsa';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
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
            if (!dbUser) {
                token.id = user!.id;
                return token;
            }
            return {
                id: dbUser.id,
                email: dbUser.email,
                name: dbUser.name,
                image: dbUser.image,
                role: dbUser.role,
            };
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
