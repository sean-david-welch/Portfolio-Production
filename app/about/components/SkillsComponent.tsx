'use client';

import { Skills } from '@prisma/client';

interface Props {
    skills: Skills[];
}

const SkillsComponent = ({ skills }: Props) => {
    return (
        <>
            {skills.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

export default SkillsComponent;
