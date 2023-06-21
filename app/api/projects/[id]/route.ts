import { prisma } from '@/lib/primsa';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest): Promise<NextResponse> => {
    const id = request.nextUrl.searchParams.get('id') as string;
    const project = await prisma.project.findUnique({
        where: { id: id },
    });
    return NextResponse.json(project);
};

export const DELETE = async (request: NextRequest): Promise<NextResponse> => {
    const id = request.nextUrl.pathname.split('/')[3];
    console.log('server side id:', id);
    await prisma.project.delete({
        where: { id: id },
    });
    return NextResponse.json(id);
};
