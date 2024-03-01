'use server';

import { prisma } from '@/lib/primsa';
import { revalidatePath } from 'next/cache';
import { getSessionAndUser } from '@/app/utils/apiUtils';

interface Props {
    projectId: string;
}

export const deleteProject = async (projectId: Props) => {
    const { user } = await getSessionAndUser();

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
