import { prisma } from '@/lib/primsa';
import styles from './styles/Users.module.css';
import UserCard from '../components/UserCard';

const Users = async () => {
    const users = await prisma.user.findMany();

    return (
        <section id={styles.users}>
            {users.map(user => {
                return <UserCard key={user.id} {...user} />;
            })}
        </section>
    );
};

export default Users;
