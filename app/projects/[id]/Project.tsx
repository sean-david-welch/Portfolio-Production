'use client';

import styles from '../styles/projects.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@prisma/client';
import { ProjectForm } from '../components/ProjectForm';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
    project: Project;
    user: { role: string } | undefined | null;
}

const ProjectInfo = ({ project, user }: Props) => {
    const { name, blurb, description, image, tags, link } = project!;
    const control = useAnimation();
    const [ref, inView] = useInView();
    const infoVariant = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7 },
        },
        hidden: { opacity: 0, scale: 0 },
    };

    useEffect(() => {
        if (inView) control.start('visible');
    }, [control, inView]);

    return (
        <motion.div
            className={styles.projectView}
            ref={ref}
            variants={infoVariant}
            initial="hidden"
            animate={control}>
            <h1>{name}</h1>
            <p>{blurb}</p>

            <Link href={String(link) ?? '/'} target="_blank">
                <Image
                    src={image ?? '/default.jpg'}
                    alt="project image"
                    width={650}
                    height={500}
                />
            </Link>
            <ul>
                {tags?.map(tag => (
                    <button key={tag} className={styles.tagButton}>
                        <li>{tag}</li>
                    </button>
                ))}
            </ul>
            <p className={styles.description}>{description}</p>
            {user?.role === 'ADMIN' && project && (
                <ProjectForm project={project} />
            )}
        </motion.div>
    );
};

export default ProjectInfo;
