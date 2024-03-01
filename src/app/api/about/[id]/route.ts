import { NextRequest, NextResponse } from 'next/server';
import { validateUser, errorResponse } from '@/utils/utils';
import { prisma } from '@/lib/prisma';

export const DELETE = async (request: NextRequest): Promise<NextResponse> => {
    try {
        await validateUser(request);
        const { model, id } = await request.json();

        let result;
        switch (model) {
            case 'about':
                result = await prisma.about.delete({ where: { id } });
                break;
            case 'experience':
                result = await prisma.experience.delete({ where: { id } });
                break;
            case 'education':
                result = await prisma.education.delete({ where: { id } });
                break;
            case 'achievements':
                result = await prisma.achievements.delete({ where: { id } });
                break;
            case 'skills':
                result = await prisma.skills.delete({ where: { id } });
                break;
            case 'hobbies':
                result = await prisma.hobbies.delete({ where: { id } });
                break;
            default:
                return NextResponse.json({ error: 'Invalid model' });
        }

        return NextResponse.json({ message: 'Deleted successfully' });
    } catch (error: any) {
        console.log(error);
        return errorResponse(500, error.message || 'Internal Server Error');
    }
};

export const PUT = async (request: NextRequest): Promise<NextResponse> => {
    try {
        await validateUser(request);
        const { model, id, data } = await request.json();

        let result;
        switch (model) {
            case 'about':
                result = await prisma.about.update({
                    where: { id },
                    data: {
                        title: data.title,
                        description: data.description,
                    },
                });
                break;
            case 'experience':
                result = await prisma.experience.update({
                    where: { id },
                    data: {
                        title: data.title,
                        description: data.description,
                    },
                });
                break;
            case 'education':
                result = await prisma.education.update({
                    where: { id },
                    data: {
                        title: data.title,
                        description: data.description,
                    },
                });
                break;
            case 'achievements':
                result = await prisma.achievements.update({
                    where: { id },
                    data: {
                        title: data.title,
                        description: data.description,
                    },
                });
                break;
            case 'skills':
                result = await prisma.skills.update({
                    where: { id },
                    data: {
                        title: data.title,
                    },
                });
                break;
            case 'hobbies':
                result = await prisma.hobbies.update({
                    where: { id },
                    data: {
                        title: data.title,
                    },
                });
                break;
            default:
                return NextResponse.json({ error: 'Invalid model' });
        }

        return NextResponse.json(result);
    } catch (error: any) {
        console.log(error);
        return errorResponse(500, error.message || 'Internal Server Error');
    }
};
