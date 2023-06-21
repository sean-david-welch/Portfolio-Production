'use client';

import axios from 'axios';
import styles from './styles/ProfileForm.module.css';
import { useState } from 'react';

export const ProfileForm = ({ user }: any) => {
    const [showProfileForm, setShowProfileForm] = useState(false);

    const userFields = [
        { name: 'name', type: 'text', defaultValue: '' },
        { name: 'bio', type: 'text', defaultValue: '' },
        { name: 'age', type: 'text', defaultValue: 0 },
        { name: 'image', type: 'text', defaultValue: '' },
    ];

    const updateUser = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        const body = {
            name: formData.get('name'),
            bio: formData.get('bio'),
            age: formData.get('age'),
            image: formData.get('image'),
        };

        try {
            const response = await axios.put('/api/user', body);

            if (response.status >= 200 && response.status < 300) {
                setShowProfileForm(false);
            } else {
                alert(`Error: ${response.status}`);
            }
        } catch (error) {
            alert(`Network error: ${error}`);
        }
    };

    return (
        <>
            <button onClick={() => setShowProfileForm(!showProfileForm)}>
                Toggle Profile Form
            </button>
            {showProfileForm && (
                <div className={styles.editProfile}>
                    <h2>Edit Your Profile</h2>
                    <form onSubmit={updateUser} className={styles.profileForm}>
                        {userFields.map(field => (
                            <div className={styles.key} key={field.name}>
                                <label htmlFor={field.name}>
                                    {field.name.charAt(0).toUpperCase() +
                                        field.name.slice(1)}
                                </label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    defaultValue={
                                        user?.[field.name] ?? field.defaultValue
                                    }
                                />
                            </div>
                        ))}
                        <button type="submit">Save</button>
                    </form>
                </div>
            )}
        </>
    );
};
