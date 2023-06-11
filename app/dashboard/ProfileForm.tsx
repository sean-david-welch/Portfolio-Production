import { revalidatePath } from 'next/cache';
import styles from './styles/ProfileForm.module.css';

export const ProfileForm = ({ user }: any) => {
    const updateUser = async (formData: FormData) => {
        'use server';

        // Fix this its not working
        await user.set(user, {
            name: formData.get('name'),
            age: formData.get('age'),
            bio: formData.get('bio'),
            image: formData.get('image'),
        });
        revalidatePath(`dashboard`);
    };

    return (
        <div className={styles.editProfile}>
            <h2>Edit Your Profile</h2>

            <form action={updateUser} className={styles.profileForm}>
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
