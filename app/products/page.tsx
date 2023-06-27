import { getSession } from 'next-auth/react';
import styles from './styles/Products.module.css';
import { getSessionAndUser } from '../utils/apiUtils';
import { Product } from '@prisma/client';
import { prisma } from '@/lib/primsa';
import { ProductFrom } from './components/ProductForm';

const ProductsPage = async () => {
    const { user } = await getSessionAndUser();

    const products: Product[] = await prisma.product.findMany();

    if (!products) {
        return (
            <section id={styles.productsPage}>
                <h1>No Products Found</h1>
            </section>
        );
    }

    return (
        <section id={styles.productsPage}>
            <h1>products</h1>
            {user && user.role === 'ADMIN' && <ProductFrom />}
        </section>
    );
};

export default ProductsPage;
