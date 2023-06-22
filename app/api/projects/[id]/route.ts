import { prisma } from '@/lib/primsa';
import { NextRequest, NextResponse } from 'next/server';
import { validateUser, validateProject, errorResponse } from '../utils';

export const GET = async (request: NextRequest): Promise<NextResponse> => {
    const id = request.nextUrl.searchParams.get('id') as string;
    const project = await prisma.project.findUnique({
        where: { id: id },
    });
    return NextResponse.json(project);
};

export const PUT = async (request: NextRequest) => {
    const id = request.nextUrl.pathname.split('/')[3];

    try {
        await validateUser(request);
        const data = await request.json();
        validateProject(data);

        const project = await prisma.project.update({
            where: { id: id },
            data: {
                name: data.name,
                description: data.description,
                blurb: data.blurb,
                image: data.image,
                tags: data.tags,
            },
        });

        return NextResponse.json(project);
    } catch (error: any) {
        console.error(error);
        return errorResponse(500, error.message || 'Internal Server Error');
    }
};

export const DELETE = async (request: NextRequest): Promise<NextResponse> => {
    const id = request.nextUrl.pathname.split('/')[3];

    try {
        await validateUser(request);

        const project = await prisma.project.delete({
            where: {
                id: id,
            },
        });
        console.log('project deleted');

        return NextResponse.json(project);
    } catch (error: any) {
        console.error(error);
        return errorResponse(500, error.message || 'Internal Server Error');
    }
};
