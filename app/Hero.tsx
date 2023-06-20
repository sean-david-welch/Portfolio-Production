'use client';

import { useRef } from 'react';
import styles from './styles/Page.module.css';
import useIntersection from './hooks/useIntersection';

export const HeroSection = () => {
    const ItemRef = useRef<HTMLHeadingElement>(null);

    useIntersection(ItemRef);

    return (
        <h1 className={`${styles.mainHeading} hidden`} ref={ItemRef}>
            Professional & Modern App Solutions for Enterprises
        </h1>
    );
};
