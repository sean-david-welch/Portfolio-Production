import { prisma } from '@/lib/primsa';
import { errorResponse } from '@/app/utils/apiUtils';
import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(String(process.env.TEST_PRIVATE_KEY));

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    try {
        const data = await request.json();
        const product = await prisma.product.findUnique({
            where: {
                id: data.id,
            },
        });

        if (!product) {
            return errorResponse(404, 'Product not found');
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: product.name,
                            description: product.description,
                        },
                        unit_amount: product.price * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/',
            cancel_url: 'http://localhost:3000/',
            automatic_tax: { enabled: true },
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error(error);
        return errorResponse(500, error.message || 'Internal Server Error');
    }
};
