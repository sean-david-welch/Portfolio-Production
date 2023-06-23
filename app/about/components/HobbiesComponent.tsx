'use client';

import { Hobbies } from '@prisma/client';

interface Props {
    hobbies: Hobbies[];
}

const HobbiesComponent = ({ hobbies }: Props) => {
    return (
        <>
            {hobbies.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

export default HobbiesComponent;
