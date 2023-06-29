import { prisma } from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import { validateUser, errorResponse, validateProduct } from '@/utils/utils';

export const GET = async () => {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
};

export const POST = async (request: NextRequest) => {
    try {
        await validateUser(request);
        const data = await request.json();
        validateProduct(data);

        const product = await prisma.product.create({
            data: {
                name: data.name,
                description: data.description,
                image: data.image,
                price: Number(data.price),
                stack: data.stack,
            },
        });

        return NextResponse.json(product);
    } catch (error: any) {
        return errorResponse(500, error.message || 'Internal Server Erro');
    }
};
