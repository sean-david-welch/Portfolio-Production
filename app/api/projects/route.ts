import { prisma } from '@/lib/primsa';
import { NextResponse, NextRequest } from 'next/server';
import { validateUser, validateProject, errorResponse } from './utils';

export const GET = async () => {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
};

export const PUT = async (request: NextRequest) => {
    try {
        await validateUser(request);
        const data = await request.json();
        validateProject(data);

        const project = await prisma.project.update({
            where: { id: data.id },
            data: {
                name: data.name,
                description: data.description,
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

export const DELETE = async (request: NextRequest) => {
    try {
        await validateUser(request);
        const data = await request.json();

        if (!data.id) {
            return errorResponse(400, 'Bad Request: No id provided');
        }

        const project = await prisma.project.delete({
            where: {
                id: data.id,
            },
        });

        return NextResponse.json(project);
    } catch (error: any) {
        console.error(error);
        return errorResponse(500, error.message || 'Internal Server Error');
    }
};
