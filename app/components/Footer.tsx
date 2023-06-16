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
                    {/* <Link className={styles.navItem} href={'/'}>
                        <FontAwesomeIcon icon={faHome} size="sm" /> Home
                    </Link>
                    <Link className={styles.navItem} href={'/dashboard'}>
                        <FontAwesomeIcon icon={faAddressCard} size="sm" />{' '}
                        Dashboard
                    </Link>
                    <Link className={styles.navItem} href={'/about'}>
                        <FontAwesomeIcon icon={faCircleInfo} size="sm" /> About
                    </Link>

                    <Link className={styles.navItem} href={'/projects'}>
                        <FontAwesomeIcon icon={faDiagramProject} size="sm" />{' '}
                        Projects
                    </Link>
                    <Link className={styles.navItem} href={'/products'}>
                        <FontAwesomeIcon icon={faCartPlus} size="sm" /> Products
                    </Link>
                    <Link className={styles.navItem} href={'/users'}>
                        <FontAwesomeIcon icon={faUser} size="sm" /> Users
                    </Link> */}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
