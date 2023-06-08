'use client';
import styles from './styles/Buttons.module.css';
import { useRef } from 'react';

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
