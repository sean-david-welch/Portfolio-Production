import Link from 'next/link';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav id={styles.navbar}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/projects'}>Projects</Link>
            <Link href={'/login'}>Login</Link>
            <Link href={'/cart'}>Cart</Link>
        </nav>
    );
};

export default Navbar;
