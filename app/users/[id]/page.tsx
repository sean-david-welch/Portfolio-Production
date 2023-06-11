import { prisma } from '@/lib/primsa';
import { Metadata } from 'next';
import styles from '../styles/Users.module.css';

interface Props {
    params: {
        id: string;
    };
}

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    return { title: `${user?.name}` };
};

const UserProfile = async ({ params }: Props) => {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    const { name, bio, image } = user ?? {};

    return (
        <section id={styles.profile}>
            <h1>{name}</h1>
            <img
                width={300}
                src={image ?? '/mememan.webp'}
                alt={`${name}'s profile`}
            />
            <p>{bio}</p>
        </section>
    );
};

export default UserProfile;
