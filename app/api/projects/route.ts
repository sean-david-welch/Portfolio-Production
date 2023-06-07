import { NextResponse, NextRequest } from 'next/server';

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
    return NextResponse.json(projects);
};
