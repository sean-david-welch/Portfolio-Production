import { prisma } from '@/lib/primsa';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { NextResponse, NextRequest } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'This is a description of project 1',
        tags: ['React', 'Next.js', 'JavaScript'],
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'This is a description of project 2',
        tags: ['Vue', 'TypeScript'],
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'This is a description of project 3',
        tags: ['Angular', 'JavaScript', 'CSS'],
    },
];

export const GET = async () => {
    try {
        const session = await getServerSession(authOptions);
        console.log('user session', session?.user);
    } catch (error) {
        console.error('Error getting session:', error);
    }

    return NextResponse.json(projects);
};

export const POST = async (request: NextRequest) => {
    const data = await request.json();

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
