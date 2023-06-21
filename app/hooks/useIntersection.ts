'use client';
import { useEffect, RefObject } from 'react';

const useIntersection = (ref: RefObject<HTMLElement>) => {
    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(
                entry => {
                    if (entry.isIntersecting) {
                        console.log('is intersecting');
                        entry.target.classList.add('show');
                        entry.target.classList.remove('hidden');
                    }
                },
                {
                    rootMargin: '0px',
                    threshold: 0.5,
                }
            );
        });
        const target = ref.current;
        observer.observe(target);

        return () => {
            observer.unobserve(target);
        };
    }, [ref]);
};

export default useIntersection;
