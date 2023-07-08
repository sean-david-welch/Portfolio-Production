import '@/styles/globals.css';

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
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
};

axios.defaults.baseURL = API_URL;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <html lang="en" className={ropa.className}>
                <body className="max-w-full overflow-x-hidden mx-auto">
                    <Header />
                    <main className="max-w-full overflow-x-hidden mx-auto">
                        <div className="container">{children}</div>
                    </main>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    );
};

export default RootLayout;
