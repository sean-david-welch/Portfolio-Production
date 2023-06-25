'use client';

import styles from './styles/ProfileForm.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateUser } from './utils/utils';
import { User } from '@prisma/client';
import { DeleteButton } from './DeleteButton';

type UserWithIndex = User & {
    [key: string]: any;
};

interface Props {
    user: UserWithIndex;
}

export const ProfileForm = ({ user }: Props) => {
    const router = useRouter();
    const [showProfileForm, setShowProfileForm] = useState(false);

    const userFields = [
        { name: 'name', type: 'text', defaultValue: '' },
        { name: 'bio', type: 'text', defaultValue: '' },
        { name: 'age', type: 'text', defaultValue: 0 },
        { name: 'image', type: 'text', defaultValue: '' },
    ];

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault;
        await updateUser(event);
        setShowProfileForm(false);
        router.refresh();
    };

    return (
        <section id={styles.form}>
            <button onClick={() => setShowProfileForm(!showProfileForm)}>
                Edit Profile
            </button>
            <DeleteButton />

            {showProfileForm && (
                <div className={styles.editProfile}>
                    <form
                        onSubmit={handleSubmit}
                        className={styles.profileForm}>
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
        </section>
    );
};
