'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/Buttons.module.css';
import { useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export const ModalButton = () => {
    const dialog = useRef<HTMLDialogElement>(null);

    return (
        <>
            <div className={styles.neon}>
                <div className={styles.neonBlur}></div>
                <button
                    className={styles.modalButton}
                    onClick={() => dialog.current?.showModal()}>
                    Open Model
                </button>
            </div>

            <dialog ref={dialog} id={styles.dialog} className={styles.modal}>
                <h1 className={styles.modalHeading}>Modal Window</h1>
                <button
                    className={styles.modalClose}
                    onClick={() => dialog.current?.close()}>
                    Close
                </button>
            </dialog>
        </>
    );
};

export const SignInButton = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <>...</>;
    }

    if (status === 'authenticated') {
        return (
            <>
                <Link href={`/account`}>
                    <Image
                        src={session.user?.image ?? '/mememan.webp'}
                        width={32}
                        height={32}
                        alt={`Your Name`}
                    />
                </Link>
                <SignOutButton />
            </>
        );
    }

    return <button onClick={() => signIn()}>Sign In</button>;
};

export const SignOutButton = () => {
    return <button onClick={() => signOut()}>Sign Out</button>;
};
