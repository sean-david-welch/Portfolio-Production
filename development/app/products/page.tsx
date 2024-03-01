import styles from './styles/Products.module.css';
import ProductCard from './components/ProductCard';

import { prisma } from '@/lib/primsa';
import { Product } from '@prisma/client';
import { ProductFrom } from './components/ProductForm';
import { getSessionAndUser } from '../utils/apiUtils';

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
            <h1 className={styles.mainHeading}>Products:</h1>
            <h2>See what application suits your business&apos;s demands</h2>
            <div className={styles.productList}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {user && user.role === 'ADMIN' && <ProductFrom />}
        </section>
    );
};

export default ProductsPage;
