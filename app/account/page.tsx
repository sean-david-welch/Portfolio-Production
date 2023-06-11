import styles from './styles/Account.module.css';
import { useSession } from 'next-auth/react';
import { SignOutButton } from '../components/Buttons';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const AccountPage = async () => {
    const session = await getServerSession();

    if (!session) {
        redirect('api/auth/signin');
    }

    return (
        <section id={styles.accountPage}>
            <h1>Account</h1>
        </section>
    );
};

export default AccountPage;
