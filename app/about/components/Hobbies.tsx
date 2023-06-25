'use client';
import styles from '../styles/About.module.css';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { AboutForm } from './AboutForm';
import { Hobbies, Skills } from '@prisma/client';
import { motion, useAnimation } from 'framer-motion';

interface GridItemProps {
    item: {
        title: string;
        id: string;
    };
    modelName: string;
    user: { role: string } | undefined | null;
}

interface HobbiesProps {
    hobbies: Hobbies[];
    skills: Skills[];
    user: { role: string } | undefined | null;
}

const GridItem: React.FC<GridItemProps> = ({ item, modelName, user }) => {
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
            {user && user?.role === 'ADMIN' && (
                <AboutForm modelId={item.id} modelName={modelName} />
            )}
        </motion.div>
    );
};

const HobbiesComponent = ({ hobbies, skills, user }: HobbiesProps) => {
    if (!hobbies || !skills) return null;

    return (
        <div className={styles.hobbies}>
            <div className={styles.mapGrid}>
                <div className={styles.skillsGrid}>
                    <h1 className={styles.mainHeading}>Hobbies:</h1>
                    {hobbies.map(item => (
                        <GridItem
                            key={item.id}
                            item={item}
                            modelName="hobbies"
                            user={user}
                        />
                    ))}
                </div>
                <div className={styles.skillsGrid}>
                    <h1 className={styles.mainHeading}>Skills:</h1>
                    {skills.map(item => (
                        <GridItem
                            key={item.id}
                            item={item}
                            modelName="skills"
                            user={user}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HobbiesComponent;
