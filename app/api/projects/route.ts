import { prisma } from '@/lib/primsa';
import { NextResponse, NextRequest } from 'next/server';
import { validateUser, validateProject, errorResponse } from './utils';

export const GET = async () => {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
};

export const POST = async (request: NextRequest) => {
    try {
        await validateUser(request);
        const data = await request.json();
        validateProject(data);

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
    } catch (error: any) {
        console.error(error);
        return errorResponse(500, error.message || 'Internal Server Error');
    }
};
