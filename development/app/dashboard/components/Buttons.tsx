'use client';

import styles from '../styles/Account.module.css';
import { useRouter } from 'next/navigation';

export const RedirectButton = () => {
    const router = useRouter();
    const redirectSignIn = () => {
        router.push('/api/auth/signin');
    };
    return (
        <button className={styles.btn} onClick={redirectSignIn}>
            Sign In
        </button>
    );
};
