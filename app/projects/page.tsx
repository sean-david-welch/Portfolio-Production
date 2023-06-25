import styles from './styles/projects.module.css';
import ProjectCard from './ProjectCard';

import { prisma } from '@/lib/primsa';
import { Metadata } from 'next';
import { getSessionAndUser } from '../utils/apiUtils';
import { ProjectForm } from './ProjectForm';
import { Project } from '@prisma/client';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A list of projects',
};

const ProjectPage = async () => {
    const { user } = await getSessionAndUser();

    const projects: Project[] = await prisma.project.findMany();

    if (!projects) {
        return (
            <>
                <h1>No Projects Found</h1>
            </>
        );
    }

    return (
        <section id={styles.projectsPage}>
            <h1 className={styles.mainHeading}>Projects:</h1>
            <p className={styles.description}>
                Take a look at what kind of solutions we can offer your business
            </p>
            <div className={styles.projectsList}>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                {user && user.role === 'ADMIN' && <ProjectForm />}
            </div>
        </section>
    );
};

export default ProjectPage;
