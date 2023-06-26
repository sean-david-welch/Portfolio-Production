'use client';
import styles from '../styles/Hero.module.css';
import Link from 'next/link';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Carousel } from './Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
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
        <section id={styles.hero}>
            <motion.div
                className={styles.hero}
                ref={ref}
                variants={cardVariant}
                initial="hidden"
                animate={control}>
                <h1 className={`${styles.mainHeading} ${styles.show}`}>
                    Modern & Professional App Solutions for Enterprise
                </h1>
                <Link href={'/products'}>
                    <button className={styles.btn}>
                        View Solutions <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </Link>
                <Carousel />
                <Link href={'#infoSection'}>
                    <button className={styles.btn}>
                        Learn more <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </Link>
            </motion.div>
        </section>
    );
};

export default HeroSection;
