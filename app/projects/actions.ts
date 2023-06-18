'use server';

import { prisma } from '@/lib/primsa';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getSession } from 'next-auth/react';

interface ProjectProps {
    projectId: string;
}

export const deleteProject = async (projectId: ProjectProps) => {
    const session = await getSession();
    const currentUserEmail = session?.user?.email || undefined;

    let user;

    if (currentUserEmail) {
        user = await prisma.user.findUnique({
            where: {
                email: currentUserEmail,
            },
        });
    }

    if (user?.role === 'ADMIN') {
        await prisma.project.delete({
            where: { id: String(projectId) },
        });
        revalidatePath('/projects');
    }
};
