import nodemailer from 'nodemailer';
import { emailHost, emailPass, emailUser, emailPort } from './config';

export const transporter = nodemailer.createTransport({
    host: emailHost,
    port: Number(emailPort),
    secure: true,
    auth: {
        user: emailUser,
        pass: emailPass,
    },
    tls: {
        ciphers: 'SSLv3',
    },
});
