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
                    <button className={styles.btn}>
                        <Link className={styles.navItem} href={'/'}>
                            <FontAwesomeIcon icon={faHome} size="sm" /> Home
                        </Link>
                    </button>
                    <button className={styles.btn}>
                        <Link className={styles.navItem} href={'/dashboard'}>
                            <FontAwesomeIcon icon={faAddressCard} size="sm" />{' '}
                            Dashboard
                        </Link>
                    </button>
                    <button className={styles.btn}>
                        <Link className={styles.navItem} href={'/about'}>
                            <FontAwesomeIcon icon={faCircleInfo} size="sm" />{' '}
                            About
                        </Link>
                    </button>

                    <button className={styles.btn}>
                        <Link className={styles.navItem} href={'/projects'}>
                            <FontAwesomeIcon
                                icon={faDiagramProject}
                                size="sm"
                            />{' '}
                            Projects
                        </Link>
                    </button>
                    <button className={styles.btn}>
                        <Link className={styles.navItem} href={'/products'}>
                            <FontAwesomeIcon icon={faCartPlus} size="sm" />{' '}
                            Products
                        </Link>
                    </button>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
