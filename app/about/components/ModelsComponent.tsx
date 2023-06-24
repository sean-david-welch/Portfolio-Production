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
            <h1 className={styles.mainHeading}>About Sean:</h1>
            {about.map((item, index) => (
                <div className={styles.grid} key={index}>
                    <div className={styles.description}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
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
            <h1 className={styles.mainHeading}>Achievements:</h1>
            {achievement.map((item, index) => (
                <div className={styles.grid} key={index}>
                    <div className={styles.description}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
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
            <h1 className={styles.mainHeading}>Education:</h1>
            {education.map((item, index) => (
                <div className={styles.grid} key={index}>
                    <div className={styles.description}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
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
            <h1 className={styles.mainHeading}>Experience:</h1>
            {experience.map((item, index) => (
                <div className={styles.grid} key={index}>
                    <div className={styles.description}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                    <DeleteButton modelId={item.id} modelName={'experience'} />
                </div>
            ))}
        </div>
    );
};

const HobbiesComponent = ({ hobbies, skills }: Props) => {
    if (!hobbies || !skills) return null;
    return (
        <div className={styles.hobbies}>
            <div className={styles.mapGrid}>
                <div className={styles.skillsGrid}>
                    <h1 className={styles.mainHeading}>Hobbies:</h1>
                    {hobbies.map((item, index) => (
                        <div className={styles.grid} key={index}>
                            <h1>{item.title}</h1>
                            <DeleteButton
                                modelId={item.id}
                                modelName={'hobbies'}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.skillsGrid}>
                    <h1 className={styles.mainHeading}>Skills:</h1>
                    {skills.map((item, index) => (
                        <div className={styles.grid} key={index}>
                            <h1>{item.title}</h1>
                            <DeleteButton
                                modelId={item.id}
                                modelName={'skills'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export {
    AboutComponent,
    AchievementComponent,
    EducationComponent,
    ExperienceComponent,
    HobbiesComponent,
};
