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
} from '@fortawesome/free-solid-svg-icons';

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
                        <h1>Sean Welch</h1>
                    </div>
                )}
                <nav>
                    <ul className={styles.navList}>
                        <Link className={styles.navItem} href={'/'}>
                            <FontAwesomeIcon icon={faHome} /> Home
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
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
