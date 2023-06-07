import axios from 'axios';
import styles from '../projects.module.css';
import { Project } from '../page';

interface Props {
    params: { id: string };
}

const ProjectDetail = async ({ params }: Props) => {
    const projects: Project[] = await axios(`/projects`).then(res => res.data);

    const project = projects.find(project => project.id === Number(params.id))!;

    return (
        <section id={styles.projectDetail}>
            <div className={styles.projectView}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
            </div>
        </section>
    );
};

export default ProjectDetail;
