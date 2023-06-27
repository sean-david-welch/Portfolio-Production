import styles from '../styles/Info.module.css';
import ProjectCard from '@/app/projects/components/ProjectCard';

import { prisma } from '@/lib/primsa';

export const ProjectDisplay = async () => {
    const projects = await prisma.project.findMany();

    return (
        <section id="projects">
            <div className={styles.projectDisplay}>
                <h1 className={styles.mainHeading}>Featured Projects:</h1>
                <h2 className={styles.heading}>
                    See what applications I've built for enterprises solutions
                </h2>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};
