import { prisma } from '@/lib/primsa';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import {
    About,
    Achievements,
    Education,
    Experience,
    Hobbies,
    Skills,
} from '@prisma/client';

export const getAboutData = async () => {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email || undefined;

    let user;

    if (currentUserEmail) {
        user = await prisma.user
            .findUnique({
                where: {
                    email: currentUserEmail,
                },
            })
            .then(user => {
                return user;
            });
    }

    const about: About[] = await prisma.about.findMany();
    const experience: Experience[] = await prisma.experience.findMany();
    const education: Education[] = await prisma.education.findMany();
    const achievements: Achievements[] = await prisma.achievements.findMany();
    const skills: Skills[] = await prisma.skills.findMany();
    const hobbies: Hobbies[] = await prisma.skills.findMany();

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
