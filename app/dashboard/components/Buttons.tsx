'use client';

import styles from '../styles/Account.module.css';
import { redirect } from 'next/navigation';

export const RedirectButton = () => {
    return (
        <button
            className={styles.btn}
            onClick={() => redirect('api/auth/signin')}>
            Sign In
        </button>
    );
};
