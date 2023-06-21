'use client';

import { useRef } from 'react';
import styles from './styles/Hero.module.css';
import useIntersection from '../hooks/useIntersection';

const HeroSection = () => {
    const ItemRef = useRef<HTMLHeadingElement>(null);

    useIntersection(ItemRef);

    return (
        <>
            <h1
                className={`${styles.mainHeading} ${styles.show}`}
                ref={ItemRef}>
                Professional & Modern App Solutions for Enterprises
            </h1>
        </>
    );
};

export default HeroSection;
