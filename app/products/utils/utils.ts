import axios from 'axios';
import { Product } from '@prisma/client';
import { loadStripe } from '@stripe/stripe-js';

export const getProductFields = (product?: Product) => [
    { name: 'name', type: 'text', defaultValue: product?.name || '' },
    {
        name: 'description',
        type: 'text',
        defaultValue: product?.description || '',
    },
    {
        name: 'price',
        type: 'text',
        defaultValue: product?.price || '',
    },
    { name: 'image', type: 'text', defaultValue: product?.image || '' },
    {
        name: 'stack',
        type: 'text',
        defaultValue: product?.stack.join(',') || '',
    },
];

export const createProduct = async (
    event: React.FormEvent<HTMLFormElement>
) => {
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const body = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        price: Number(formData.get('price')),
        stack: (formData.get('stack') as string)?.split(',') || [],
        image: formData.get('image') as string,
    };

    const response = await axios.post('/api/products', body);
    console.log('Response:', response);

    if (response.status === 200) {
        console.log('Product created successfully!');
    } else {
        console.error('Failed to create project', response);
    }
};

export const handlePayment = async (
    event: React.MouseEvent<HTMLButtonElement>,
    product: Product
) => {
    event.preventDefault();
    const body = {
        id: product.id,
        price: product.price,
    };

    try {
        const stripe = await loadStripe(String(process.env.TEST_PUBLIC_KEY!));
        const response = await axios.post('/api/checkout', body);

        console.log(response);

        if (!stripe) return;

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
