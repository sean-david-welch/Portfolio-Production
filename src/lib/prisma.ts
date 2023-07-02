import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
    datasources: {
        db: {
            url: `${process.env.DATABASE_URL}?pgbouncer=true&connection_timeout=15&pool_timeout=15`,
        },
    },
});
