import styles from '../styles/Footer.module.css';

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faCartPlus,
    faDiagramProject,
    faAddressCard,
    faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactForm from '../client/ContactForm';

export const FooterInformation = () => {
    return (
        <div className={styles.footerInfo}>
            <div className={styles.infoContent}>
                <ContactForm />

                <ul className={styles.linksList}>
                    <Link
                        href={'https://github.com/sean-david-welch'}
                        target="_blank">
                        <FontAwesomeIcon icon={faGithub} size={'xl'} />
                        Github
                    </Link>
                    <Link
                        href={
                            'https://www.linkedin.com/in/sean-welch-3988191a5/'
                        }
                        target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size={'xl'} />
                        LinkedIn
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export const FooterButtons = () => {
    return (
        <ul className={styles.footerList}>
            <button className={styles.btn}>
                <Link className={styles.navItem} href={'/'}>
                    <FontAwesomeIcon icon={faHome} size="sm" /> Home
                </Link>
            </button>
            <button className={styles.btn}>
                <Link className={styles.navItem} href={'/dashboard'}>
                    <FontAwesomeIcon icon={faAddressCard} size="sm" /> Dashboard
                </Link>
            </button>
            <button className={styles.btn}>
                <Link className={styles.navItem} href={'/about'}>
                    <FontAwesomeIcon icon={faCircleInfo} size="sm" /> About
                </Link>
            </button>

            <button className={styles.btn}>
                <Link className={styles.navItem} href={'/projects'}>
                    <FontAwesomeIcon icon={faDiagramProject} size="sm" />{' '}
                    Projects
                </Link>
            </button>
            <button className={styles.btn}>
                <Link className={styles.navItem} href={'/products'}>
                    <FontAwesomeIcon icon={faCartPlus} size="sm" /> Products
                </Link>
            </button>
        </ul>
    );
};
