'use client';
import styles from '../styles/ProjectsStyles.module.css';

import { Project } from '@prisma/client';
import { DeleteButton } from './deleteProject';
import { getProjectFields, createProject, updateProject } from '../utils/utils';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const ProjectForm = ({ project }: { project?: Project }) => {
    const router = useRouter();
    const [showProjectForm, setShowProjectForm] = useState(false);

    const projectFields = getProjectFields(project);

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
