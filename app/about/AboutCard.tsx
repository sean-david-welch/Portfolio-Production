import {
    AboutComponent,
    AchievementComponent,
    EducationComponent,
    ExperienceComponent,
    HobbiesComponent,
    SkillsComponent,
} from './components/ModelsComponent';
import styles from './styles/About.module.css';
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
            <div className={styles.about}>
                <AboutComponent about={about} />
            </div>
            <div className={styles.achievement}>
                <AchievementComponent achievement={achievements} />
            </div>
            <div className={styles.education}>
                <EducationComponent education={education} />
            </div>
            <div className={styles.experience}>
                <ExperienceComponent experience={experience} />
            </div>
            <div className={styles.hobbies}>
                <HobbiesComponent hobbies={hobbies} />
            </div>
            <div className={styles.skills}>
                <SkillsComponent skills={skills} />
            </div>
        </div>
    );
};

export default AboutCard;
