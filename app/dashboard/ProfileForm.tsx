import styles from './styles/ProfileForm.module.css';
import { updateUser } from './actions';

export const ProfileForm = ({ user }: any) => {
    return (
        <div className={styles.editProfile}>
            <h2>Edit Your Profile</h2>

            <form action={() => updateUser} className={styles.profileForm}>
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
