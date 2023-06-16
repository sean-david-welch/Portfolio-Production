'use client';

import axios from 'axios';
import { useState } from 'react';

interface Project {
    [key: string]: string | string[];
    name: string;
    description: string;
    image: string;
    tags: string[];
}

export const ProjectForm = () => {
    const [showProjectForm, setShowProjectForm] = useState(false);

    const projectFields = [
        { name: 'name', type: 'text', defaultValue: '' },
        { name: 'description', type: 'text', defaultValue: '' },
        { name: 'image', type: 'text', defaultValue: '' },
        { name: 'tags', type: 'text', defaultValue: '' },
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
