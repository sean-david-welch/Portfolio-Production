'use client';

import { Experience } from '@prisma/client';

interface Props {
    experience: Experience[];
}

const ExperienceComponent = ({ experience }: Props) => {
    return (
        <>
            {experience.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

export default ExperienceComponent;
