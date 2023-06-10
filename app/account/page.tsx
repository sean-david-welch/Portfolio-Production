import styles from './styles/Account.module.css';
import { useSession } from 'next-auth/react';
import { SignOutButton } from '../components/Buttons';
import Image from 'next/image';

const AccountPage = () => {
    const { data: session, status } = useSession();

    return <section id={styles.accountPage}></section>;
};

export default AccountPage;
