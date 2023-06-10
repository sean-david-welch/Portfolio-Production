import Header from './components/Header';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';
import AuthProvider from './AuthProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <html lang="en">
                <body>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    );
}
