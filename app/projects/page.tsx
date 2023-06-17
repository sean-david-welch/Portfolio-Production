import axios from 'axios';
import styles from './styles/projects.module.css';
import { prisma } from '@/lib/primsa';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { ProjectForm } from './ProjectForm';

export interface Project {
    id: string;
    name: string;
    description: string;
    image: string;
    tags: string[];
}

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A list of projects',
};

axios.defaults.baseURL = 'http://localhost:3000/api';

const ProjectPage = async () => {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email || undefined;

    let user;

    if (currentUserEmail) {
        user = await prisma.user.findUnique({
            where: {
                email: currentUserEmail,
            },
        });
    }

    const projects: Project[] = await axios(`/projects`)
        .then(res => res.data)
        .catch(error => console.error(error));

    return (
        <section id={styles.projectsPage}>
            <div className={styles.projectsList}>
                <h1>Project Page</h1>
                {projects.map(project => (
                    <div key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <ul>
                            {project.tags.map(tag => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                {user?.role === 'ADMIN' && <ProjectForm />}
            </div>
        </section>
    );
};

export default ProjectPage;
