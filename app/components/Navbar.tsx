import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Header.module.css';
import Sidebar from './Sidebar';
import { SignInButton } from './Buttons';

const Navbar = () => {
    return (
        <>
            <Sidebar />
            <nav id={styles.navbar}>
                <Link href={'/'} prefetch={false} className={styles.logo}>
                    <Image
                        src={'/favicon.ico'}
                        alt={'Your Logo'}
                        priority={true}
                        width={64}
                        height={64}
                    />
                </Link>
                <SignInButton />
            </nav>
        </>
    );
};

export default Navbar;
