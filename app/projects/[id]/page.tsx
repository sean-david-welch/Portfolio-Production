import Image from 'next/image';
import styles from '../styles/projects.module.css';

import { prisma } from '@/lib/primsa';

import { ProjectForm } from '../ProjectForm';
import { DeleteButton } from '../deleteProject';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

interface Props {
    params: { id: string };
}

const ProjectDetail = async ({ params }: Props) => {
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

    const project = await prisma.project.findUnique({
        where: { id: params.id },
    });
    const { name, blurb, description, image, tags } = project!;

    return (
        <section id={styles.projectDetail}>
            <div className={styles.projectView}>
                <h1>{name}</h1>
                <p>{blurb}</p>
                <Image
                    src={image ?? '/default.jpg'}
                    alt="project image"
                    width={650}
                    height={500}
                />
                <ul>
                    {tags?.map(tag => (
                        <button className={styles.tagButton}>
                            <li key={tag}>{tag}</li>
                        </button>
                    ))}
                </ul>
                <p className={styles.description}>{description}</p>
                {user?.role === 'ADMIN' && project && (
                    <ProjectForm project={project} />
                )}
            </div>
        </section>
    );
};

export default ProjectDetail;
