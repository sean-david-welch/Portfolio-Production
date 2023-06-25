import Link from 'next/link';
import styles from './styles/UserCard.module.css';
import { User } from '@prisma/client';

interface Props {
    user: User;
}

const UserCard = ({ user: { name, bio, email, age, image } }: Props) => {
    return (
        <div className={styles.card}>
            <img
                src={image ?? '/favicon.ico'}
                alt={`${name}'s profile`}
                className={styles.cardImage}
            />
            <div className={styles.cardContent}>
                <h1>
                    {name} Age: {age ?? `none`}
                </h1>
                <h1>{email}</h1>
                <p>{bio ?? `No bio`}</p>
            </div>
        </div>
    );
};

export default UserCard;
