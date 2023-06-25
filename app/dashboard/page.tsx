import styles from './styles/Account.module.css';
import UserCard from './components/UserCard';

import { prisma } from '@/lib/primsa';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { ProfileForm } from './components/ProfileForm';
import { getServerSession } from 'next-auth';
import { RedirectButton } from './components/Buttons';

const getSessionAndUser = async () => {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email;

    if (!currentUserEmail) {
        return { session: null, user: null };
    }

    const user = await prisma.user.findUnique({
        where: {
            email: currentUserEmail,
        },
    });

    return { session, user, currentUserEmail };
};

const DashboardPage = async () => {
    const { session, user, currentUserEmail } = await getSessionAndUser();
    console.log(session, user, currentUserEmail);

    if (!session || !currentUserEmail || !user) {
        return (
            <section id={styles.dashboardPage}>
                <h1 className={styles.mainHeading}>User Dashboard:</h1>
                <div className={styles.redirectButton}>
                    <RedirectButton />
                </div>
            </section>
        );
    }

    return (
        <section id={styles.dashboardPage}>
            <h1 className={styles.mainHeading}>User Dashboard:</h1>
            {user && <UserCard user={user} />}
            {user && <ProfileForm user={user} />}
        </section>
    );
};

export default DashboardPage;
