import Image from 'next/image';
import styles from '../styles/projects.module.css';
import { prisma } from '@/lib/primsa';
import { DeleteButton } from '../deleteProject';

interface ProjectProps {
    params: { id: string };
}

const ProjectDetail = async ({ params }: ProjectProps) => {
    const project = await prisma.project.findUnique({
        where: { id: params.id },
    });
    const { id, name, description, image } = project ?? {};

    if (!project) {
        return <div>Project not found</div>;
    }
    return (
        <section id={styles.projectDetail}>
            <div className={styles.projectView}>
                <h1>{name}</h1>
                <p>{description}</p>
                <Image
                    src={image ?? '/default.jpg'}
                    alt="project image"
                    width={64}
                    height={64}
                />
                <DeleteButton projectId={id ?? project.id} />
            </div>
        </section>
    );
};

export default ProjectDetail;
