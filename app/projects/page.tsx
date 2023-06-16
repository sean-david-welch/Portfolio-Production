import { Metadata } from 'next';
import styles from './styles/projects.module.css';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export interface Project {
    id: number;
    name: string;
    description: string;
    tags: string[];
}

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A list of projects',
};

axios.defaults.baseURL = 'http://localhost:3000/api';

const ProjectPage = async () => {
    try {
        const session = await getServerSession(authOptions);
        console.log('user session', session?.user);
    } catch (error) {
        console.error('Error getting session:', error);
    }
    const projects: Project[] = await axios(`/projects`).then(res => res.data);

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
            </div>
        </section>
    );
};

export default ProjectPage;
