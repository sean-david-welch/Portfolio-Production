'use client';

import Image from 'next/image';
import styles from '../styles/Products.module.css';
import CheckoutForm from '../components/CheckoutForm';

import { Product } from '@prisma/client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
    product: Product;
    user?: { role: string } | undefined | null;
}

export const ProductInfo = ({ product }: Props) => {
    const { name, description, image, stack, price } = product!;

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
            className={styles.productView}
            ref={ref}
            variants={infoVariant}
            initial="hidden"
            animate={control}>
            <Image
                src={image ?? 'default.jpg'}
                alt="image"
                width={600}
                height={600}
            />
            <div className={styles.productInfo}>
                <h1 className={styles.mainHeading}>{name}</h1>
                <p className={styles.description}>{description}</p>
                <ul>
                    {stack?.map(item => (
                        <button key={item} className={styles.stackButton}>
                            <li>{item}</li>
                        </button>
                    ))}
                </ul>
                <h1 className={styles.price}>Price: €{price}</h1>
                <CheckoutForm product={product} />
            </div>
        </motion.div>
    );
};
