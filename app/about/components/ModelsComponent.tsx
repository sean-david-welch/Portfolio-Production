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
