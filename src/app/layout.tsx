import '@/styles/globals.css';
import Head from 'next/head';

import { Ropa_Sans } from 'next/font/google';
import { API_URL } from '@/lib/config';

import axios from 'axios';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthProvider from './AuthProvider';

const ropa = Ropa_Sans({
    weight: ['400'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'ModerDev',
    description: 'Modern and clean web development',
};

axios.defaults.baseURL = API_URL;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <html lang="en" className={ropa.className}>
                <Head>
                    <title>ModerDev</title>
                    <meta
                        name="description"
                        content="Modern and clean web development"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, user-scalable=no"
                    />
                </Head>
                <body className="max-w-[100vw]">
                    <Header />
                    <main>
                        <div className="container">{children}</div>
                    </main>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    );
};

export default RootLayout;
