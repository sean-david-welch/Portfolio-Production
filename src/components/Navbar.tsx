import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Header.module.css';
import Sidebar from './Sidebar';
// import { SignInButton } from './client/Buttons';

const Navbar = () => {
    return (
        <>
            <Sidebar />
            <nav id={styles.navbar}>
                <Link href={'/'} prefetch={false} className={styles.logo}>
                    <Image
                        src={'/logo/logo.png'}
                        alt={'Your Logo'}
                        priority={true}
                        width={60}
                        height={60}
                    />
                </Link>
                {/* <SignInButton /> */}
            </nav>
        </>
    );
};

export default Navbar;
