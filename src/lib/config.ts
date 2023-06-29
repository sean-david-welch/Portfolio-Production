export const API_URL =
    process.env.NODE_ENV === 'production'
        ? process.env.PRODUCTION_API
        : process.env.LOCAL_API;
export const BASE_URL =
    process.env.NODE_ENV === 'production'
        ? process.env.PRODUCTION_URL
        : process.env.LOCAL_URL;
export const STRIPE_PRIVATE_KEY =
    process.env.NODE_ENV === 'production'
        ? process.env.SRIPE_PRIVATE_KEY
        : process.env.TEST_PRIVATE_KEY;
