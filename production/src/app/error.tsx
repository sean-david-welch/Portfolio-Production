'use client';

import styles from '@/styles/Page.module.css';
import { useRouter } from 'next/navigation';

import { useEffect } from 'react';

type ErrorProps = {
    error: { name: string; message: string };
};

export default function Error({ error }: ErrorProps) {
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    const reset = () => {
        router.refresh();
    };

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button className={styles.btn} onClick={reset}>
                Try again
            </button>
        </div>
    );
}
