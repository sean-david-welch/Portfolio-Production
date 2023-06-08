import Link from 'next/link';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav id={styles.navbar}>
            <Link href={'/'}>Home</Link>
            <Link href={'/projects'}>Projects</Link>
        </nav>
    );
};

export default Navbar;
