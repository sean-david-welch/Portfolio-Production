import { prisma } from '@/lib/prisma';
import { getSessionAndUser } from '@/utils/utils';
import {
    About,
    Achievements,
    Education,
    Experience,
    Hobbies,
    Skills,
} from '@prisma/client';

export const getAboutData = async () => {
    const { user } = await getSessionAndUser();

    const about: About[] = await prisma.about.findMany();
    const experience: Experience[] = await prisma.experience.findMany();
    const education: Education[] = await prisma.education.findMany();
    const achievements: Achievements[] = await prisma.achievements.findMany();
    const skills: Skills[] = await prisma.skills.findMany();
    const hobbies: Hobbies[] = await prisma.hobbies.findMany();

    return {
        user,
        about,
        experience,
        education,
        achievements,
        skills,
        hobbies,
    };
};
