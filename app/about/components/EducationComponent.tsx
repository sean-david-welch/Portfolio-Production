'use client';

import { Education } from '@prisma/client';

interface Props {
    education: Education[];
}

const EducationComponent = ({ education }: Props) => {
    return (
        <>
            {education.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

export default EducationComponent;
