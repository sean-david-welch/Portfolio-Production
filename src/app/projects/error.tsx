'use client';
import styles from './styles/ProjectsStyles.module.css';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="error">
            <h2>Something went wrong!</h2>
            <button className={styles.btn} onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}
