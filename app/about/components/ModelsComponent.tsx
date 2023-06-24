'use client';

import useIntersection from '@/app/hooks/useIntersection';
import { useRef } from 'react';
import {
    motion,
    AnimatePresence,
    useTransform,
    useScroll,
} from 'framer-motion';

import {
    About,
    Achievements,
    Education,
    Experience,
    Hobbies,
    Skills,
} from '@prisma/client';
import styles from '../styles/About.module.css';
import { DeleteButton } from './DeleteButton';

interface SectionProps {
    title: string;
    data: About[] | Achievements[] | Education[] | Experience[];
    modelName: string;
}

interface HobbiesProps {
    hobbies: Hobbies[];
    skills: Skills[];
}

const SectionComponent = ({ title, data, modelName }: SectionProps) => {
    if (!data) return null;

    return (
        <div className={styles[modelName]}>
            <h1 className={styles.mainHeading}>{title}:</h1>
            {data.map((item, index) => (
                <div className={styles.grid} key={index}>
                    <div className={styles.description}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                    <DeleteButton modelId={item.id} modelName={modelName} />
                </div>
            ))}
        </div>
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
                        <div className={styles.grid} key={index}>
                            <h1>{item.title}</h1>
                            <DeleteButton
                                modelId={item.id}
                                modelName={'hobbies'}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.skillsGrid}>
                    <h1 className={styles.mainHeading}>Skills:</h1>
                    {skills.map((item, index) => (
                        <div className={styles.grid} key={index}>
                            <h1>{item.title}</h1>
                            <DeleteButton
                                modelId={item.id}
                                modelName={'skills'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { SectionComponent, HobbiesComponent };
