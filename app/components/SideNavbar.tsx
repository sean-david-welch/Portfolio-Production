'use client';

import styles from './styles/Navbar.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const SideNavbar = () => {
    interface UseSideNavbar {
        isOpen: boolean;
        toggleSideNavbar: () => void;
    }

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSideNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`side-nav ${isOpen ? 'open' : 'closed'}`}>
                <div className={styles.navIcon}>
                    <FontAwesomeIcon
                        className={styles.navigation}
                        icon={isOpen ? faBars : faX}
                        height={64}
                        width={64}
                        onClick={toggleSideNavbar}
                    />
                </div>
            </div>
        </>
    );
};

export default SideNavbar;
