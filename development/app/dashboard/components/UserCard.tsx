'use client';

import Image from 'next/image';
import styles from '../styles/Account.module.css';

import { User } from '@prisma/client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
    user: User;
}

const UserCard = ({ user: { name, bio, email, age, image } }: Props) => {
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
        <div className={styles.card}>
            <motion.div
                className={styles.userCard}
                ref={ref}
                variants={cardVariant}
                initial="hidden"
                animate={control}>
                <Image
                    src={image ?? '/favicon.ico'}
                    width={500}
                    height={750}
                    alt={`${name}'s profile`}
                    className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                    <h1>
                        {name} Age: {age ?? `none`}
                    </h1>
                    <h1>{email}</h1>
                    <p>{bio ?? `No bio`}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default UserCard;
