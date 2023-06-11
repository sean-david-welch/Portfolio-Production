'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div>
            <h1>Error</h1>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
};

export default Error;
