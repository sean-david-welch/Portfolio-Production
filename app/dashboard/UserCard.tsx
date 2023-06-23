import Link from 'next/link';
import styles from './styles/UserCard.module.css';
import { User } from '@prisma/client';

interface Props {
    user: User;
}

const UserCard = ({ user: { id, name, age, image } }: Props) => {
    return (
        <div className={styles.card}>
            <img
                src={image ?? '/favicon.ico'}
                alt={`${name}'s profile`}
                className={styles.cardImage}
            />
            <div className={styles.cardContent}>
                <h3>
                    <Link href={`/users/${id}`}>{name}</Link>
                </h3>
                <p>Age: {age ?? `none`}</p>
            </div>
        </div>
    );
};

export default UserCard;
