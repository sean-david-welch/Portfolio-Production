'use client';
import styles from './styles/Hero.module.css';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Carousel } from './Carousel';

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
            </motion.div>
            <Carousel />
        </section>
    );
};

export default HeroSection;
