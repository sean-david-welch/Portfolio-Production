'use client';
import styles from '../styles/About.module.css';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { DeleteButton } from './DeleteButton';
import { About, Achievements, Education, Experience } from '@prisma/client';
import { AboutForm } from './AboutForm';

interface SectionProps {
    title: string;
    data: About[] | Achievements[] | Education[] | Experience[];
    modelName: string;
    user: { role: string } | undefined | null;
}

interface SectionGridItemProps {
    item: {
        title: string;
        description: string;
        id: string;
    };
    modelName: string;
    user: { role: string } | undefined | null;
}

const SectionGridItem = ({ item, modelName, user }: SectionGridItemProps) => {
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
            <div className={styles.description}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
            {user && user?.role === 'ADMIN' && <AboutForm modelId={item.id} />}
            {user && user?.role === 'ADMIN' && (
                <DeleteButton modelId={item.id} modelName={modelName} />
            )}
        </motion.div>
    );
};

const SectionComponent = ({ title, data, modelName, user }: SectionProps) => {
    if (!data) return null;

    return (
        <div className={styles[modelName]}>
            <h1 className={styles.mainHeading}>{title}:</h1>
            {data.map(item => (
                <SectionGridItem
                    key={item.id}
                    item={item}
                    modelName={modelName}
                    user={user}
                />
            ))}
        </div>
    );
};

export default SectionComponent;
