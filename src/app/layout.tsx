import '@/styles/globals.css';

import { Ropa_Sans } from 'next/font/google';

import axios from 'axios';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthProvider from './AuthProvider';

const ropa = Ropa_Sans({
    weight: ['400'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

axios.defaults.baseURL = 'http://localhost:3000/api';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <html lang="en" className={ropa.className}>
                <body className="min-h-screen text-gray-200">
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
