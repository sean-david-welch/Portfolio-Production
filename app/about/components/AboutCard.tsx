import {
    AboutComponent,
    AchievementComponent,
    EducationComponent,
    ExperienceComponent,
    HobbiesComponent,
    SkillsComponent,
} from './ModelsComponent';
import styles from '../styles/About.module.css';
import {
    About,
    Achievements,
    Education,
    Experience,
    Hobbies,
    Skills,
} from '@prisma/client';

interface Models {
    about: About[];
    achievements: Achievements[];
    education: Education[];
    experience: Experience[];
    hobbies: Hobbies[];
    skills: Skills[];
}

interface Props {
    models: Models;
}

const AboutCard = ({
    models: { about, achievements, education, experience, hobbies, skills },
}: Props) => {
    return (
        <div className={styles.models}>
            <AboutComponent about={about} />

            <ExperienceComponent experience={experience} />
            <EducationComponent education={education} />
            <AchievementComponent achievement={achievements} />
            <HobbiesComponent hobbies={hobbies} />
            <SkillsComponent skills={skills} />
        </div>
    );
};

export default AboutCard;
