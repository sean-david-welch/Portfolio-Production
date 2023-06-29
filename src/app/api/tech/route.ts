import { errorResponse, validateUser } from '@/utils/utils';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    try {
        await validateUser(request);
        const data = await request.json();

        if (!data.title || !data.description || !data.image) {
            return NextResponse.json('Not sufficient data');
        }

        const tech = await prisma.technologies.create({
            data: {
                title: data.title,
                description: data.description,
                image: data.image,
            },
        });

        return NextResponse.json(tech);
    } catch (error: any) {
        return errorResponse(500, error.message || 'Internal Server Error');
    }
};
