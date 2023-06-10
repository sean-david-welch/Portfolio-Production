'use client';
import { useSession } from 'next-auth/react';

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
    const { data: session, status } = useSession();
    console.log(session, status);

    if (status === 'authenticated') {
        return <>{children}</>;
    } else {
        return <div>Access Denied</div>;
    }
};
