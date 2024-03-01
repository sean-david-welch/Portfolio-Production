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
        ? process.env.STRIPE_PRIVATE_KEY
        : process.env.TEST_PRIVATE_KEY;

export const emailHost = process.env.EMAIL_SERVER;
export const emailPass = process.env.EMAIL_PASSWORD;
export const emailUser = process.env.EMAIL_USER;
export const emailPort = process.env.EMAIL_PORT;
