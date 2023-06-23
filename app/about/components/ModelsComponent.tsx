'use client';

import {
    About,
    Achievements,
    Education,
    Experience,
    Hobbies,
    Skills,
} from '@prisma/client';
import styles from '../styles/About.module.css';
import { DeleteButton } from './DeleteButton';

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
        <div className={styles.about}>
            <h1>About Sean:</h1>
            {about.map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <DeleteButton modelId={item.id} modelName={'about'} />
                </div>
            ))}
        </div>
    );
};

const AchievementComponent = ({ achievement }: Props) => {
    if (!achievement) return null;
    return (
        <div className={styles.achievement}>
            <h1>Achievements:</h1>
            {achievement.map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <DeleteButton
                        modelId={item.id}
                        modelName={'achievements'}
                    />
                </div>
            ))}
        </div>
    );
};

const EducationComponent = ({ education }: Props) => {
    if (!education) return null;
    return (
        <div className={styles.education}>
            <h1>Education:</h1>
            {education.map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <DeleteButton modelId={item.id} modelName={'education'} />
                </div>
            ))}
        </div>
    );
};

const ExperienceComponent = ({ experience }: Props) => {
    if (!experience) return null;
    return (
        <div className={styles.experience}>
            <h1>Experience:</h1>
            {experience.map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <DeleteButton modelId={item.id} modelName={'experience'} />
                </div>
            ))}
        </div>
    );
};

const HobbiesComponent = ({ hobbies }: Props) => {
    if (!hobbies) return null;
    return (
        <div className={styles.hobbies}>
            <h1>Hobbies:</h1>
            {hobbies.map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <DeleteButton modelId={item.id} modelName={'hobbies'} />
                </div>
            ))}
        </div>
    );
};

const SkillsComponent = ({ skills }: Props) => {
    if (!skills) return null;
    return (
        <div className={styles.skills}>
            <h1>Skills:</h1>
            {skills.map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <DeleteButton modelId={item.id} modelName={'skills'} />
                </div>
            ))}
        </div>
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
