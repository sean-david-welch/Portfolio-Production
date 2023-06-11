import styles from './styles/Account.module.css';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('api/auth/signin');
    }

    return (
        <section id={styles.dashboardPage}>
            <h1>Dashboard</h1>
        </section>
    );
};

export default DashboardPage;
