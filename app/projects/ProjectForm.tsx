'use client';

import { useState } from 'react';
import { createProject, updateProject } from './utils';
import { useRouter } from 'next/navigation';

import styles from './styles/projects.module.css';

interface Project {
    id: string;
    name: string;
    description: string | null;
    image: string | null;
    tags: string[];
}

export const ProjectForm = ({ project }: { project?: Project }) => {
    const router = useRouter();
    const [showProjectForm, setShowProjectForm] = useState(false);

    const projectFields = [
        { name: 'name', type: 'text', defaultValue: project?.name || '' },
        {
            name: 'description',
            type: 'text',
            defaultValue: project?.description || '',
        },
        { name: 'image', type: 'text', defaultValue: project?.image || '' },
        {
            name: 'tags',
            type: 'text',
            defaultValue: project?.tags.join(',') || '',
        },
    ];

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (project) {
            await updateProject(event, project?.id);
        } else {
            await createProject(event);
        }
        setShowProjectForm(false);
        router.refresh();
    };

    return (
        <>
            <button onClick={() => setShowProjectForm(!showProjectForm)}>
                Toggle Project Form
            </button>
            {showProjectForm && (
                <form onSubmit={handleSubmit}>
                    {projectFields.map(field => (
                        <div className={styles.projectForm} key={field.name}>
                            <label htmlFor={field.name}>
                                {field.name.charAt(0).toUpperCase() +
                                    field.name.slice(1)}
                            </label>
                            <input
                                type={field.type}
                                name={field.name}
                                defaultValue={field.defaultValue}
                            />
                        </div>
                    ))}
                    <button type="submit">Save</button>
                </form>
            )}
        </>
    );
};
