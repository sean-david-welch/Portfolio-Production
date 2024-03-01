import { prisma } from '@/lib/primsa';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getSessionAndUser } from '@/app/utils/apiUtils';

export const PUT = async (request: NextRequest) => {
    const data = await request.json();
    data.age = Number(data.age);
    const { currentUserEmail } = await getSessionAndUser();

    const user = await prisma.user.update({
        where: {
            email: currentUserEmail,
        },
        data,
    });

    if (!data.name || !data.bio || !data.image || !data.age) {
        return NextResponse.json({
            status: 400,
            message: 'Missing required project fields',
        });
    }

    return NextResponse.json(user);
};

export const DELETE = async (): Promise<NextResponse> => {
    const { currentUserEmail } = await getSessionAndUser();

    const user = await prisma.user.delete({
        where: {
            email: currentUserEmail,
        },
    });

    return NextResponse.json(user);
};
