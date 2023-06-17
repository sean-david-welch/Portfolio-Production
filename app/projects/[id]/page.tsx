import axios from 'axios';
import styles from '../styles/projects.module.css';
import { Project } from '../page';
import { DeleteButton } from '../deleteProject';
import Image from 'next/image';

interface ProjectProps {
    params: { id: string };
}

const ProjectDetail = async ({ params }: ProjectProps) => {
    const projects: Project[] = await axios(`/projects`).then(res => res.data);

    const project = projects.find(project => project.id === String(params.id))!;

    return (
        <section id={styles.projectDetail}>
            <div className={styles.projectView}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <Image
                    src={project.image}
                    alt="project image"
                    width={64}
                    height={64}
                />
                <DeleteButton projectId={project.id} />
            </div>
        </section>
    );
};

export default ProjectDetail;
