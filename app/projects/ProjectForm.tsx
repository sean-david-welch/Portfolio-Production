'use client';

import { useState } from 'react';
import { createProject, updateProject } from './utils/utils';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { DeleteButton } from './deleteProject';

import styles from './styles/projects.module.css';

interface Project {
    id: string;
    name: string;
    blurb: string | null;
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
        {
            name: 'blurb',
            type: 'text',
            defaultValue: project?.blurb || '',
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
        <section id={styles.form}>
            <div className={styles.optionsGrid}>
                <button
                    className={styles.optionsBtn}
                    onClick={() => setShowProjectForm(!showProjectForm)}>
                    {project ? (
                        <FontAwesomeIcon icon={faPenToSquare} />
                    ) : (
                        'Create Project'
                    )}
                </button>
                {project && <DeleteButton projectId={project?.id} />}
            </div>
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
                    <button className={styles.btn} type="submit">
                        {project ? 'Save Changes' : 'Save'}
                    </button>
                </form>
            )}
        </section>
    );
};
