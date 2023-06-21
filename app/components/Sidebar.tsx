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
                        <div className={styles.iconGrid}>
                            <FontAwesomeIcon
                                icon={faX}
                                height={32}
                                width={32}
                                className={styles.navigation}
                            />
                            <h1 className={styles.sectionHeading}>
                                <span className={styles.underline}>
                                    Sean Welch{' '}
                                </span>
                            </h1>
                        </div>
                    </div>
                )}
                <nav>
                    <ul className={styles.navList}>
                        <Link
                            className={styles.navItem}
                            href={'/'}
                            onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                        <Link
                            className={styles.navItem}
                            href={'/dashboard'}
                            onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon icon={faAddressCard} /> Dashboard
                        </Link>
                        <Link
                            className={styles.navItem}
                            href={'/about'}
                            onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon icon={faCircleInfo} /> About
                        </Link>

                        <Link
                            className={styles.navItem}
                            href={'/projects'}
                            onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon icon={faDiagramProject} /> Projects
                        </Link>
                        <Link
                            className={styles.navItem}
                            href={'/products'}
                            onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon icon={faCartPlus} /> Products
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
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    size={'xl'}
                                />
                                LinkedIn
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
