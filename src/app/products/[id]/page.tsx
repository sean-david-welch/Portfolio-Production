import styles from '../styles/Products.module.css';

import { prisma } from '@/lib/prisma';
import { ProductInfo } from './Product';
import { getSessionAndUser } from '@/utils/utils';

interface Props {
    params: { id: string };
}

const ProductDetail = async ({ params }: Props) => {
    const { user } = await getSessionAndUser();

    const product = await prisma.product.findUnique({
        where: { id: params.id },
    });

    if (!product)
        return (
            <section id={styles.productDetail}>
                <h1>No Product Found</h1>
            </section>
        );

    return (
        <section id={styles.productDetail}>
            <h1 className={styles.mainHeading}>Product: {product.name}</h1>
            <ProductInfo product={product} user={user} />
        </section>
    );
};

export default ProductDetail;
