'use client';
import { useRef } from 'react';

export const ModalButton = () => {
    const dialog = useRef<HTMLDialogElement>(null);

    return (
        <>
            <div className="neon">
                <div className="neon-blur"></div>
                <button
                    className="modal-button"
                    onClick={() => dialog.current?.showModal()}>
                    Open Model
                </button>
            </div>

            <dialog ref={dialog} className="modal">
                <h1 className="modal-heading">Modal Window</h1>
                <button
                    className="modal-close"
                    onClick={() => dialog.current?.close()}>
                    Close
                </button>
            </dialog>
        </>
    );
};
