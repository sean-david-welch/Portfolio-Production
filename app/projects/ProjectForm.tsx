'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const ProjectForm = () => {
    const router = useRouter();
    const [showProjectForm, setShowProjectForm] = useState(false);

    const projectFields = [
        { name: 'name', type: 'text' },
        { name: 'description', type: 'text' },
        { name: 'image', type: 'text' },
        { name: 'tags', type: 'text' },
    ];

    const createProject = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const body = {
            name: formData.get('name') as string,
            description: formData.get('description') as string,
            image: formData.get('image') as string,
            tags: (formData.get('tags') as string)?.split(',') || [],
        };

        axios.defaults.baseURL = 'http://localhost:3000/api';
        const response = await axios.post('/projects', body);

        if (response.status === 200) {
            console.log('Project created successfully!');
            router.refresh();
        } else {
            console.error('Failed to create project', response);
        }
    };

    return (
        <>
            <button onClick={() => setShowProjectForm(!showProjectForm)}>
                Toggle Project From
            </button>
            {showProjectForm && (
                <form onSubmit={createProject}>
                    {projectFields.map(field => (
                        <div className="" key={field.name}>
                            <label htmlFor={field.name}>
                                {field.name.charAt(0).toUpperCase() +
                                    field.name.slice(1)}
                            </label>

                            <input type={field.type} name={field.name} />
                        </div>
                    ))}
                    <button type="submit">Save</button>
                </form>
            )}
        </>
    );
};
