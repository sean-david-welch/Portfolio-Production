import { prisma } from '@/lib/prisma';
import { Product } from '@prisma/client';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { NextRequest, NextResponse } from 'next/server';

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

export const validateProduct = (data: Product) => {
    if (
        !data.name ||
        !data.description ||
        !data.image ||
        !data.price ||
        !data.stack
    ) {
        throw new Error('Missing required product fields');
    }
};

export const validateAbout = (data: any) => {
    if (!data.title) {
        throw new Error('Missing required schema fields');
    }
};

export const getSessionAndUser = async () => {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email;

    if (!currentUserEmail) {
        return { session: null, user: null };
    }

    const user = await prisma.user.findUnique({
        where: {
            email: currentUserEmail,
        },
    });

    return { session, user, currentUserEmail };
};
