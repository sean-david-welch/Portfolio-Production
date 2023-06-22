import styles from './styles/projects.module.css';
import ProjectCard from './ProjectCard';

import { prisma } from '@/lib/primsa';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { ProjectForm } from './ProjectForm';

interface Project {
    id: string;
    name: string;
    description: string | null;
    image: string | null;
    tags: string[];
}

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A list of projects',
};

const ProjectPage = async () => {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email || undefined;

    let user;

    if (currentUserEmail) {
        user = await prisma.user
            .findUnique({
                where: {
                    email: currentUserEmail,
                },
            })
            .then(user => {
                return user;
            });
    }

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
            <h1>Project Page</h1>
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
