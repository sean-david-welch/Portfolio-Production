import { prisma } from '@/lib/primsa';
import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export const GET = async () => {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
};

export const POST = async (request: NextRequest) => {
    try {
        const session = await getServerSession(authOptions);

        if (!session)
            return NextResponse.json({
                status: 401,
                message: 'Not Logged In!',
            });

        const currentUserEmail = session?.user?.email;

        if (!currentUserEmail)
            return NextResponse.json({
                status: 401,
                message: 'No Email associated with this account',
            });

        const data = await request.json();

        if (!data.name || !data.description || !data.image || !data.tags) {
            return NextResponse.json({
                status: 400,
                message: 'Missing required project fields',
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                email: currentUserEmail,
            },
        });

        if (!user)
            return NextResponse.json({
                status: 404,
                message: 'User not found',
            });

        if (user?.role !== 'ADMIN') {
            return NextResponse.json({
                status: 403,
                message: 'User does not have admin privileges',
            });
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
    } catch (err) {
        console.error(err);
        return NextResponse.json({
            status: 500,
            message: 'Internal Server Error',
        });
    }
};
