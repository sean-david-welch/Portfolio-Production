import styles from '../styles/Info.module.css';
import { prisma } from '@/lib/primsa';

export const ProjectDisplay = async () => {
    const projects = await prisma.project.findMany();

    return (
        <div className={styles.projectDisplay}>
            <h1 className={styles.mainHeading}>Featured Projects:</h1>
            <h2 className={styles.heading}>
                See what applications I've built for other enterprises
            </h2>

            {projects.map(project => (
                <ul>
                    <li>{project.name}</li>
                </ul>
            ))}
        </div>
    );
};
