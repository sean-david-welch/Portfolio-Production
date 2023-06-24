'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Hobbies, Skills } from '@prisma/client';
import styles from '../styles/About.module.css';
import { DeleteButton } from './DeleteButton';

interface GridItemProps {
    item: {
        title: string;
        id: string;
    };
    modelName: string;
}

interface HobbiesProps {
    hobbies: Hobbies[];
    skills: Skills[];
    user: { role: string } | undefined | null;
}

const GridItem: React.FC<GridItemProps> = ({ item, modelName }) => {
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
            className={styles.grid}
            ref={ref}
            variants={gridVariant}
            initial="hidden"
            animate={control}>
            <h1>{item.title}</h1>
            <DeleteButton modelId={item.id} modelName={modelName} />
        </motion.div>
    );
};

const HobbiesComponent = ({ hobbies, skills }: HobbiesProps) => {
    if (!hobbies || !skills) return null;

    return (
        <div className={styles.hobbies}>
            <div className={styles.mapGrid}>
                <div className={styles.skillsGrid}>
                    <h1 className={styles.mainHeading}>Hobbies:</h1>
                    {hobbies.map((item, index) => (
                        <GridItem key={index} item={item} modelName="hobbies" />
                    ))}
                </div>
                <div className={styles.skillsGrid}>
                    <h1 className={styles.mainHeading}>Skills:</h1>
                    {skills.map((item, index) => (
                        <GridItem key={index} item={item} modelName="skills" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HobbiesComponent;
