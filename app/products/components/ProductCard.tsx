'use client';

import styles from '../styles/Products.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@prisma/client';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

interface Props {
    product: Product;
}

const ProductCard = ({
    product: { id, name, description, stack, price, image },
}: Props) => {
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
            className={styles.productCard}
            ref={ref}
            variants={cardVariant}
            initial="hidden"
            animate={control}>
            <Link href={`products/${id}`}>
                <Image
                    src={image ?? '/default.jpg'}
                    alt="product image"
                    height={500}
                    width={650}
                />
                <h1>{name}</h1>
                <p>{description}</p>
                <ul>
                    {stack?.map((stack, index) => (
                        <button
                            className={styles.stackButton}
                            key={stack + index}>
                            <li>{stack}</li>
                        </button>
                    ))}
                </ul>
                <button className={styles.btn}>€{price}</button>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
