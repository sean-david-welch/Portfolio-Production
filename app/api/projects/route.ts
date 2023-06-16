import { prisma } from '@/lib/primsa';
import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export const GET = async () => {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
};

export const POST = async (request: NextRequest) => {
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

    if (user.role !== 'ADMIN') {
        throw new Error('Request Denied');
    }

    const project = await prisma.project.create({
        data: {
            name: data.name,
            description: data.description,
            image: data.image,
            tags: data.tags,
            createdAt: new Date(),
        },
    });

    return NextResponse.json(project);
};
