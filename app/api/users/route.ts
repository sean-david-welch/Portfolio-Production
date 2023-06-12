import { prisma } from '@/lib/primsa';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

export const PUT = async (request: Request) => {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;

    const data = await request.json();
    data.age = Number(data.age);

    const user = await prisma.user.update({
        where: {
            email: currentUserEmail,
        },
        data,
        // check if data formats fits what is acceptable in db
    });

    return NextResponse.json(user);
};
