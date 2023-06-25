import styles from '../styles/projects.module.css';
import ProjectInfo from './Project';

import { prisma } from '@/lib/primsa';
import { getSessionAndUser } from '@/app/utils/apiUtils';

interface Props {
    params: { id: string };
}

const ProjectDetail = async ({ params }: Props) => {
    const { user } = await getSessionAndUser();

    const project = await prisma.project.findUnique({
        where: { id: params.id },
    });

    if (!project) {
        return (
            <section id={styles.projectDetail}>
                <h1>No Project Found</h1>
            </section>
        );
    }

    return (
        <section id={styles.projectDetail}>
            <ProjectInfo project={project} user={user} />
        </section>
    );
};

export default ProjectDetail;
