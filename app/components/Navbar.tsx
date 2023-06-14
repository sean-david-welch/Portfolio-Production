import Image from 'next/image';
import styles from './styles/Header.module.css';
import Sidebar from './Sidebar';
import { SignInButton } from './Buttons';

const Navbar = () => {
    return (
        <>
            <Sidebar />
            <nav id={styles.navbar}>
                <Image
                    src={'/favicon.ico'}
                    alt={'Your Logo'}
                    width={64}
                    height={64}
                    className={styles.logo}
                />
                <SignInButton />
            </nav>
        </>
    );
};

export default Navbar;
