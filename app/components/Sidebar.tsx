'use client';

import styles from './styles/Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faX,
    faBars,
    faHome,
    faCartPlus,
    faDiagramProject,
    faUser,
    faAddressCard,
    faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {!isOpen && (
                <div className={styles.navIcon} onClick={toggleSidebar}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={styles.navigation}
                        height={32}
                        width={32}
                    />
                </div>
            )}
            <div
                className={`${styles.sideNav} ${
                    isOpen ? styles.open : styles.closed
                }`}>
                {isOpen && (
                    <div className={styles.navIcon} onClick={toggleSidebar}>
                        <FontAwesomeIcon
                            icon={faX}
                            height={32}
                            width={32}
                            className={styles.navigation}
                        />
                    </div>
                )}
                <nav>
                    <ul className={styles.navList}>
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
                    <div className={styles.socialLinks}>
                        <h1 className={styles.socialHeading}>
                            <span className={styles.underline}>
                                Social Links:{' '}
                            </span>
                        </h1>
                        <ul className={styles.linksList}>
                            <Link
                                href={
                                    'https://www.linkedin.com/in/sean-welch-3988191a5/'
                                }
                                target="_blank">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    size={'2xl'}
                                />
                            </Link>
                            <Link
                                href={'https://github.com/sean-david-welch'}
                                target="_blank">
                                <FontAwesomeIcon icon={faGithub} size={'2xl'} />
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
