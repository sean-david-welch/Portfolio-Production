'use client';

import styles from './styles/projects.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@prisma/client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
    project: Project;
}

const ProjectCard = ({ project: { id, name, blurb, image, tags } }: Props) => {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const cardVariant = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.2 },
        },
        hidden: { opacity: 0, scale: 0 },
    };

    useEffect(() => {
        if (inView) control.start('visible');
    }, [control, inView]);

    return (
        <motion.div
            className={styles.projectCard}
            ref={ref}
            variants={cardVariant}
            initial="hidden"
            animate={control}>
            <Link href={`projects/${id}`}>
                <Image
                    src={image ?? '/default.jpg'}
                    alt="project image"
                    height={500}
                    width={650}></Image>
                <h1>{name}</h1>
                <p>{blurb}</p>
                <ul>
                    {tags?.map((tag, index) => (
                        <button className={styles.tagButton} key={tag + index}>
                            <li>{tag}</li>
                        </button>
                    ))}
                </ul>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
