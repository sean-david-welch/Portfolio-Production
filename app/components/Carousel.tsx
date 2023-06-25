'use client';
import styles from './styles/Carousel.module.css';

import { useState } from 'react';
import { motion } from 'framer-motion';

export const Carousel = () => {
    const images = ['/default.jpg', '/farmec.png', '/primalformulas.png'];
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="relative">
            {/* Slider window */}
            <div className="overflow-hidden">
                <motion.div
                    layoutId="carousel"
                    className="flex transition-transform duration-200"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 50,
                    }}>
                    {images.map((src, index) => (
                        <motion.img
                            layoutId={`image-${index}`}
                            src={src}
                            key={index.toString()}
                            alt=""
                            className="h-64 w-full object-cover"
                        />
                    ))}
                </motion.div>
            </div>
            {/* Navigation buttons */}
            <button
                onClick={() =>
                    setCurrentSlide(old =>
                        old > 0 ? old - 1 : images.length - 1
                    )
                }
                className="top-half absolute left-0">
                Prev
            </button>
            <button
                onClick={() =>
                    setCurrentSlide(old =>
                        old < images.length - 1 ? old + 1 : 0
                    )
                }
                className="top-half absolute right-0">
                Next
            </button>
        </div>
    );
};
