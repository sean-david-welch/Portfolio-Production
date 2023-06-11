'use client';

import axios from 'axios';
import styles from './styles/ProfileForm.module.css';

export const ProfileForm = ({ user }: any) => {
    const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const body = {
            name: formData.get('name'),
            bio: formData.get('bio'),
            age: formData.get('age'),
            image: formData.get('image'),
        };

        axios.defaults.baseURL = 'http://localhost:3000/api';

        try {
            const respose = await axios.put('/user', body, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.error('Error updating the user:', error);
        }
    };

    return (
        <div className={styles.editProfile}>
            <h2>Edit Your Profile</h2>
            <form onSubmit={updateUser} className={styles.profileForm}>
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
                <input type="text" name="age" defaultValue={user?.age ?? 0} />
                <label htmlFor="image">Profile Image URL</label>
                <input
                    type="text"
                    name="image"
                    defaultValue={user?.image ?? ''}
                />

                <button type="submit">Save</button>
            </form>
        </div>
    );
};
