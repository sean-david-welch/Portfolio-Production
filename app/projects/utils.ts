import { useRouter } from 'next/navigation';
import axios from 'axios';
import React from 'react';

export const createProject = async (
    event: React.FormEvent<HTMLFormElement>
) => {
    const router = useRouter();

    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const body = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        image: formData.get('image') as string,
        tags: (formData.get('tags') as string)?.split(',') || [],
    };

    const response = await axios.post('/api/projects', body);

    if (response.status === 200) {
        console.log('Project created successfully!');
        router.refresh();
    } else {
        console.error('Failed to create project', response);
    }
};

export const updateProject = async (
    event: React.FormEvent<HTMLFormElement>,
    projectId: string
) => {
    const router = useRouter();
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const body = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        image: formData.get('image') as string,
        tags: (formData.get('tags') as string)?.split(',') || [],
    };

    const response = await axios.put(`/api/projects/${projectId}`, body);

    if (response.status === 200) {
        console.log('Project updated successfully!');
        router.refresh();
    } else {
        console.error('Failed to update project', response);
    }
};
