'use client';
import styles from '../styles/Products.module.css';

import { Product } from '@prisma/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createProduct, getProductFields } from '../utils/utils';

export const ProductFrom = ({ product }: { product?: Product }) => {
    const router = useRouter();
    const [showProductForm, setShowProductForm] = useState(false);

    const productFields = getProductFields(product);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await createProduct(event);
        } catch (error: any) {
            console.log(error);
        }
        setShowProductForm(false);
        router.refresh();
    };

    return (
        <section id={styles.form}>
            <button
                className={styles.btn}
                onClick={() => setShowProductForm(!showProductForm)}>
                Create Product
            </button>
            {showProductForm && (
                <form onSubmit={handleSubmit}>
                    {productFields.map(field => (
                        <div className={styles.productForm} key={field.name}>
                            <label htmlFor={field.name}>
                                {field.name.charAt(0).toUpperCase() +
                                    field.name.slice(1)}
                            </label>
                            <input
                                type={field.type}
                                name={field.name}
                                defaultValue={field.defaultValue}
                                placeholder={field.name}
                            />
                        </div>
                    ))}
                    <button className={styles.btn} type="submit">
                        Save
                    </button>
                </form>
            )}
        </section>
    );
};
