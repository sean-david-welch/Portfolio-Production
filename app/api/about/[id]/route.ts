import { NextRequest, NextResponse } from 'next/server';
import { validateUser, errorResponse } from '@/app/utils/apiUtils';
import { prisma } from '@/lib/primsa';

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
