'use client';
import { useEffect, RefObject } from 'react';

const useIntersection = (ref: RefObject<HTMLElement>) => {
    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(
                        'Is intersecting:',
                        entry.isIntersecting,
                        entry
                    );
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('show');
                }
            });
        });

        const target = ref.current;
        observer.observe(target);

        return () => {
            observer.unobserve(target);
            console.log('unobserved');
        };
    }, [ref]);
};

export default useIntersection;
