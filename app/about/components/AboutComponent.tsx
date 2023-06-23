'use client';

import { About } from '@prisma/client';

interface Props {
    about: About[];
}

const AboutComponent = ({ about }: Props) => {
    return (
        <>
            {about.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

export default AboutComponent;
