'use client';

import { motion } from 'framer-motion';

const spinner = {
    width: '50px',
    height: '50px',
    borderRadius: '25px',
    border: '5px solid #eee',
    borderTop: '5px solid #666',
};

const spinTransition = {
    loop: Infinity,
    ease: 'linear',
    duration: 1,
};

function LoadingSpinner() {
    return (
        <>
            <motion.div
                className="loading-spinner"
                style={spinner}
                animate={{ rotate: 360 }}
                transition={spinTransition}
            />
        </>
    );
}

export default LoadingSpinner;
