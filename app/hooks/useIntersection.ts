'use client';
import { useEffect, RefObject } from 'react';

const useIntersection = (ref: RefObject<HTMLElement>) => {
    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    entry.target.classList.remove('hidden');
                } else {
                    entry.target.classList.remove('show');
                    entry.target.classList.add('hidden');
                }
            });
        });

        const target = ref.current;
        observer.observe(target);

        return () => {
            observer.unobserve(target);
        };
    }, [ref]);
};

export default useIntersection;
