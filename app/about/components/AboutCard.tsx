import { HobbiesComponent, SectionComponent } from './ModelsComponent';
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

interface User {
    role: string;
}

interface Props {
    models: Models;
    user: User | undefined | null;
}

const AboutCard = ({
    models: { about, achievements, education, experience, hobbies, skills },
    user,
}: Props) => {
    return (
        <div className={styles.models}>
            <SectionComponent
                title="About Sean"
                data={about}
                modelName="about"
            />
            <SectionComponent
                title="Experience"
                data={experience}
                modelName="experience"
            />
            <SectionComponent
                title="Education"
                data={education}
                modelName="education"
            />
            <SectionComponent
                title="Achievements"
                data={achievements}
                modelName="achievements"
            />
            <HobbiesComponent hobbies={hobbies} skills={skills} />
        </div>
    );
};

export default AboutCard;
