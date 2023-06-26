'use client';

import styles from '../styles/Info.module.css';
import Image from 'next/image';
import { Technologies } from '@prisma/client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface TechItemProps {
    technology: Technologies;
}

const TechItem: React.FC<TechItemProps> = ({ technology }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const gridVariant = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
        },
        hidden: { opacity: 0, scale: 0 },
    };

    useEffect(() => {
        if (inView) control.start('visible');
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            variants={gridVariant}
            initial="hidden"
            animate={control}>
            <div className={styles.gridItem}>
                <h1 className={styles.heading}>{technology.title}</h1>
                <Image
                    src={technology.image}
                    alt="image"
                    height={100}
                    width={100}
                />
                <p className={styles.description}>{technology.description}</p>
            </div>
        </motion.div>
    );
};

interface Props {
    technologies: Technologies[];
}

const TechItems: React.FC<Props> = ({ technologies }) => {
    return (
        <div className={styles.gridLayout}>
            {technologies.map(technology => (
                <TechItem key={technology.id} technology={technology} />
            ))}
        </div>
    );
};

export default TechItems;
