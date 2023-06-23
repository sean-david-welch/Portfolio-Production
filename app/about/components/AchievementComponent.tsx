'use client';

import { Achievements } from '@prisma/client';

interface Props {
    achievement: Achievements[];
}

const AchievementComponent = ({ achievement }: Props) => {
    return (
        <>
            {achievement.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

export default AchievementComponent;
