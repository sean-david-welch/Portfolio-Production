import { NextResponse, NextRequest } from 'next/server';
import {
    validateUser,
    errorResponse,
    validateAbout,
} from '@/app/utils/apiUtils';
import { prisma } from '@/lib/primsa';

export const GET = async () => {
    const about = await prisma.about.findMany();
    const experience = await prisma.experience.findMany();
    const education = await prisma.education.findMany();
    const achievements = await prisma.achievements.findMany();
    const skills = await prisma.skills.findMany();
    const hobbies = await prisma.skills.findMany();

    const data = {
        about,
        experience,
        education,
        achievements,
        skills,
        hobbies,
    };

    return NextResponse.json(data);
};

export const POST = async (request: NextRequest) => {
    try {
        await validateUser(request);
        const { model, data } = await request.json();
        validateAbout(data);

        let result;
        switch (model) {
            case 'about':
                result = await prisma.about.create({
                    data: {
                        title: data.title,
                        description: data.description,
                    },
                });
                break;
            case 'experience':
                result = await prisma.experience.create({
                    data: {
                        title: data.title,
                        description: data.description,
                    },
                });
                break;
            case 'education':
                result = await prisma.education.create({
                    data: {
                        title: data.title,
                        description: data.description,
                    },
                });
                break;
            case 'achievements':
                result = await prisma.achievements.create({
                    data: {
                        title: data.title,
                        description: data.description,
                    },
                });
                break;
            case 'skills':
                result = await prisma.skills.create({
                    data: {
                        title: data.title,
                    },
                });
                break;
            case 'hobbies':
                result = await prisma.hobbies.create({
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
