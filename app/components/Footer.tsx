import Link from 'next/link';
import styles from './styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faCartPlus,
    faDiagramProject,
    faUser,
    faAddressCard,
    faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <ul className={styles.footerList}>
                    <Link className={styles.navItem} href={'/'}>
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                    <Link className={styles.navItem} href={'/dashboard'}>
                        <FontAwesomeIcon icon={faAddressCard} /> Dashboard
                    </Link>
                    <Link className={styles.navItem} href={'/about'}>
                        <FontAwesomeIcon icon={faCircleInfo} /> About
                    </Link>

                    <Link className={styles.navItem} href={'/projects'}>
                        <FontAwesomeIcon icon={faDiagramProject} /> Projects
                    </Link>
                    <Link className={styles.navItem} href={'/products'}>
                        <FontAwesomeIcon icon={faCartPlus} /> Products
                    </Link>
                    <Link className={styles.navItem} href={'/users'}>
                        <FontAwesomeIcon icon={faUser} /> Users
                    </Link>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
