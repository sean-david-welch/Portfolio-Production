import axios from 'axios';
import { Product } from '@prisma/client';

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
];

export const createProduct = async (
    event: React.FormEvent<HTMLFormElement>
) => {
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const body = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        price: formData.get('price'),
        image: formData.get('image') as string,
    };

    const response = await axios.post('/api/products', body);

    if (response.status === 200) {
        console.log('Product created successfully!');
    } else {
        console.error('Failed to create project', response);
    }
};
