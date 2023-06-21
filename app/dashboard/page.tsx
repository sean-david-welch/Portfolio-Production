import styles from './styles/Account.module.css';
import { prisma } from '@/lib/primsa';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { ProfileForm } from './ProfileForm';
import UserCard from './UserCard';

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

    return (
        <section id={styles.dashboardPage}>
            <h1>Dashboard</h1>
            <UserCard user={user!} />
            <ProfileForm user={user} />
        </section>
    );
};

export default DashboardPage;
