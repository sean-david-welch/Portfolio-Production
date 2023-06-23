'use client';

import {
    About,
    Achievements,
    Education,
    Experience,
    Hobbies,
    Skills,
} from '@prisma/client';

interface Props {
    about?: About[];
    achievement?: Achievements[];
    education?: Education[];
    experience?: Experience[];
    hobbies?: Hobbies[];
    skills?: Skills[];
}

const AboutComponent = ({ about }: Props) => {
    if (!about) return null;
    return (
        <>
            {about.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

const AchievementComponent = ({ achievement }: Props) => {
    if (!achievement) return null;
    return (
        <>
            {achievement.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

const EducationComponent = ({ education }: Props) => {
    if (!education) return null;
    return (
        <>
            {education.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

const ExperienceComponent = ({ experience }: Props) => {
    if (!experience) return null;
    return (
        <>
            {experience.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

const HobbiesComponent = ({ hobbies }: Props) => {
    if (!hobbies) return null;
    return (
        <>
            {hobbies.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

const SkillsComponent = ({ skills }: Props) => {
    if (!skills) return null;
    return (
        <>
            {skills.map((item, index) => (
                <h1 key={index}>{item.title}</h1>
            ))}
        </>
    );
};

export {
    AboutComponent,
    AchievementComponent,
    EducationComponent,
    ExperienceComponent,
    HobbiesComponent,
    SkillsComponent,
};
