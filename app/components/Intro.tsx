'use client';

import styles from './styles/Info.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const Introduction = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const cardVariant = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 },
        },
        hidden: { opacity: 0, scale: 0 },
    };

    useEffect(() => {
        if (inView) control.start('visible');
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            variants={cardVariant}
            initial="hidden"
            animate={control}>
            <div className={styles.intro}>
                <h1 className={styles.mainHeading}>Hello, I'm Sean</h1>
                <h2 className={styles.heading}>A passionate Web developer</h2>
                <Link href={'/about'}>
                    <Image
                        src={'/modeling.jpeg'}
                        width={600}
                        height={400}
                        alt="image"
                    />
                </Link>
                <p className={styles.description}>
                    I'm Dublin-based web developer with a knack for creating
                    dynamic and efficient websites. My journey into the realm of
                    web development started as a personal challenge, but it
                    quickly turned into a passion. After graduating from Trinity
                    College Dublin with a 2:1 in Commerce (BBS), I found myself
                    drawn to the intersection of business and technology. I've
                    since dedicated myself to building digital solutions that
                    not only look great but also enhance business operations. My
                    background in commerce equips me with a unique perspective,
                    allowing me to understand and cater to the specific needs of
                    businesses. I am excited about the endless possibilities of
                    web development and look forward to helping more businesses
                    navigate the digital landscape.
                </p>
                <Link href={'#skills'}>
                    <button className={styles.btn}>
                        What can I offer
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};
