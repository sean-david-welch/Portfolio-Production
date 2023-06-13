import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/Navbar.module.css';
import SideNavbar from './SideNavbar';
import { SignInButton } from './Buttons';

const Navbar = () => {
    return (
        <nav id={styles.navbar}>
            <SideNavbar />
            <ul className={styles.navList}>
                <Image
                    src={'/favicon.ico'}
                    alt={'Your Logo'}
                    width={64}
                    height={64}
                    className={styles.logo}
                />
                <Link className={styles.navItem} href={'/'}>
                    Home
                </Link>
                <Link className={styles.navItem} href={'/projects'}>
                    Projects
                </Link>
                <Link className={styles.navItem} href={'/products'}>
                    Products
                </Link>
                <Link className={styles.navItem} href={'/users'}>
                    Users
                </Link>
                <SignInButton />
            </ul>
        </nav>
    );
};

export default Navbar;
