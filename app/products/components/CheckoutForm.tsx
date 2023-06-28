import axios from 'axios';
import styles from '../styles/Products.module.css';

import { Product } from '@prisma/client';
import { loadStripe } from '@stripe/stripe-js';

interface Props {
    product: Product;
}

const CheckoutForm = ({ product }: Props) => {
    const handlePayment = async (
        event: React.FormEvent<HTMLFormElement>,
        product: Product
    ) => {
        event.preventDefault();
        const body = {
            id: product.id,
            price: product.price,
        };

        try {
            const stripe = await loadStripe(
                String(process.env.TEST_PUBLIC_KEY!)
            );
            const response = await axios.post('/api/checkout', body);

            console.log(response);

            if (!stripe) {
                console.log('Stripe failed to initialize.');
                return;
            }

            if (response.data.id) {
                stripe
                    .redirectToCheckout({
                        sessionId: response.data.id,
                    })
                    .catch(function (error) {
                        console.error('Stripe redirection error:', error);
                    });
            } else {
                console.error('Stripe checkout session creation failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <form onSubmit={event => handlePayment(event, product)}>
            <button className={styles.btn} role="link" type="submit">
                Buy Now
            </button>
        </form>
    );
};

export default CheckoutForm;
