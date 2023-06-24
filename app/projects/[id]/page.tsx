import styles from '../styles/projects.module.css';

import { prisma } from '@/lib/primsa';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProjectInfo from './Project';

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
