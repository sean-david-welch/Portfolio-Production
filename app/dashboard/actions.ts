'use server';
import { prisma } from '@/lib/primsa';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { revalidatePath } from 'next/cache';
import { authOptions } from '../api/auth/[...nextauth]/route';

export const updateUser = async ({ user }: any, formData: FormData) => {
    if (!user) {
        throw new Error('User not found');
    }

    const updatedUser = {
        id: user.id,
        name: formData.get('name') as string,
        age: parseInt(formData.get('age') as string),
        bio: formData.get('bio') as string,
        image: formData.get('image') as string,
    };

    await prisma.user.update({
        where: { id: updatedUser.id },
        data: updatedUser,
    });
    revalidatePath(`dashboard`);
};
