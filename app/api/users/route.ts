import { prisma } from '@/lib/primsa';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

export const PUT = async (request: NextRequest) => {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;

    const data = await request.json();
    data.age = Number(data.age);

    if (!data.name || !data.bio || !data.image || !data.age) {
        return NextResponse.json({
            status: 400,
            message: 'Missing required project fields',
        });
    }

    const user = await prisma.user.update({
        where: {
            email: currentUserEmail,
        },
        data,
    });

    return NextResponse.json(user);
};
