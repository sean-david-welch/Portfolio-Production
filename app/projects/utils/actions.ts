'use server';

import { prisma } from '@/lib/primsa';
import { revalidatePath } from 'next/cache';
import { getSession } from 'next-auth/react';

interface ProjectProps {
    projectId: string;
}

export const deleteProject = async (projectId: ProjectProps, user: any) => {
    const session = await getSession();
    const currentUserEmail = session?.user?.email || undefined;

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

    console.log(user);

    if (user?.role !== 'ADMIN') {
        throw new Error('You are not authorized to delete this project');
    }

    if (user?.role === 'ADMIN') {
        await prisma.project.delete({
            where: { id: String(projectId) },
        });
        revalidatePath('/projects');
    }
};
