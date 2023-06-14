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
        return (
            <ul className={styles.signIn}>
                <button className={styles.signInButton}>...</button>
            </ul>
        );
    }

    if (status === 'authenticated') {
        return (
            <>
                <ul className={styles.signIn}>
                    <SignOutButton />
                    <Link href={`/dashboard`}>
                        <Image
                            src={session.user?.image ?? '/mememan.webp'}
                            width={64}
                            height={64}
                            alt={`Your Name`}
                            className={styles.profileImage}
                        />
                    </Link>
                </ul>
            </>
        );
    }

    return (
        <button className={styles.signInButton} onClick={() => signIn()}>
            Sign In
        </button>
    );
};

export const SignOutButton = () => {
    return (
        <button className={styles.signOutButton} onClick={() => signOut()}>
            Sign Out
        </button>
    );
};
