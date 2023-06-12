'use client';

import styles from './styles/ProfileForm.module.css';
import { updateUser } from './actions';
import { useState } from 'react';

export const ProfileForm = ({ user }: any) => {
    const [showProfileForm, setShowProfileForm] = useState(false);

    const userFields = [
        { name: 'name', type: 'text', defaultValue: '' },
        { name: 'bio', type: 'textarea', defaultValue: '' },
        { name: 'age', type: 'text', defaultValue: 0 },
        { name: 'image', type: 'text', defaultValue: '' },
    ];

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        updateUser({ user }, formData);
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
                        {userFields.map(field => (
                            <div className={styles.key} key={field.name}>
                                <label htmlFor={field.name}>
                                    {field.name.charAt(0).toUpperCase() +
                                        field.name.slice(1)}
                                </label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        name={field.name}
                                        cols={30}
                                        rows={10}
                                        defaultValue={
                                            user?.[field.name] ??
                                            field.defaultValue
                                        }></textarea>
                                ) : (
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        defaultValue={
                                            user?.[field.name] ??
                                            field.defaultValue
                                        }
                                    />
                                )}
                            </div>
                        ))}
                        <button type="submit">Save</button>
                    </form>
                </div>
            )}
        </>
    );
};

{
    /* <label htmlFor="name">Name</label>
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
/> */
}
