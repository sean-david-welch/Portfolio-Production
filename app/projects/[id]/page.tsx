import Image from 'next/image';
import styles from '../styles/projects.module.css';
import { prisma } from '@/lib/primsa';
import { DeleteButton } from '../deleteProject';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

interface ProjectProps {
    params: { id: string };
}

const ProjectDetail = async ({ params }: ProjectProps) => {
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
        console.log('user:', user);
    }

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
