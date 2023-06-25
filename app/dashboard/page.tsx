import styles from './styles/Account.module.css';
import UserCard from './UserCard';

import { prisma } from '@/lib/primsa';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { ProfileForm } from './ProfileForm';
import { getServerSession } from 'next-auth';

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('api/auth/signin');
    }

    const currentUserEmail = session?.user?.email!;
    const user = await prisma.user
        .findUnique({
            where: {
                email: currentUserEmail,
            },
        })
        .then(user => {
            return user;
        });

    if (!user) {
        redirect('api/auth/signin');
    }

    return (
        <section id={styles.dashboardPage}>
            <h1 className={styles.mainHeading}>User Dashboard:</h1>
            <UserCard user={user!} />
            <ProfileForm user={user} />
        </section>
    );
};

export default DashboardPage;
