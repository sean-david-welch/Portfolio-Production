import styles from './styles/Account.module.css';
import { User } from '@prisma/client';
import Image from 'next/image';

interface Props {
    user: User;
}

const UserCard = ({ user: { name, bio, email, age, image } }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.userCard}>
                <Image
                    src={image ?? '/favicon.ico'}
                    width={500}
                    height={750}
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
        </div>
    );
};

export default UserCard;
