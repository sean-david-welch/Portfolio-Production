import { prisma } from '@/lib/primsa';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../api/auth/[...nextauth]/route';

export const errorResponse = (status: number, messgae: string) => {
    return NextResponse.json({
        status,
        messgae,
    });
};

export const validateUser = async (request: NextRequest) => {
    const session = await getServerSession(authOptions);

    if (!session) throw new Error(`Not Logged In!`);

    const currentUserEmail = session?.user?.email;

    if (!currentUserEmail)
        throw new Error('No Email associated with this account');

    const user = await prisma.user.findUnique({
        where: {
            email: currentUserEmail,
        },
    });

    if (!user) throw new Error('User not found');

    if (user?.role !== 'ADMIN')
        throw new Error('User does not have admin privileges');

    return user;
};

export const validateProject = (data: any) => {
    if (
        !data.name ||
        !data.description ||
        !data.blurb ||
        !data.image ||
        !data.tags
    ) {
        throw new Error('Missing required project fields');
    }
};
