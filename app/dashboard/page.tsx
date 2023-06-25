import styles from './styles/Account.module.css';
import UserCard from './components/UserCard';

import { ProfileForm } from './components/ProfileForm';
import { RedirectButton } from './components/Buttons';
import { getSessionAndUser } from '../utils/apiUtils';

const DashboardPage = async () => {
    const { session, user, currentUserEmail } = await getSessionAndUser();

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
