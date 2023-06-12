'use client';

import styles from './styles/ProfileForm.module.css';
import { updateUser } from './actions';
import { useState, useTransition } from 'react';

export const ProfileForm = ({ user }: any) => {
    const [showProfileForm, setShowProfileForm] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        startTransition(() => updateUser({ user }, formData));
        setShowProfileForm(false);
    };

    return (
        <>
            <button onClick={() => setShowProfileForm(!showProfileForm)}>
                Toggle Profile Form
            </button>
            {showProfileForm && (
                <div className={styles.editProfile}>
                    <h2>Edit Your Profile</h2>

                    <form
                        onSubmit={handleSubmit}
                        className={styles.profileForm}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={user?.name ?? ''}
                        />
                        <label htmlFor="bio">Bio</label>
                        <textarea
                            name="bio"
                            cols={30}
                            rows={10}
                            defaultValue={user?.bio ?? ''}></textarea>
                        <label htmlFor="age">Age</label>
                        <input
                            type="text"
                            name="age"
                            defaultValue={user?.age ?? 0}
                        />
                        <label htmlFor="image">Profile Image URL</label>
                        <input
                            type="text"
                            name="image"
                            defaultValue={user?.image ?? ''}
                        />

                        <button type="submit">Save</button>
                    </form>
                </div>
            )}
        </>
    );
};
