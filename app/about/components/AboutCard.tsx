import SectionComponent from './Models';
import HobbiesComponent from './Hobbies';
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
                user={user}
            />
            <SectionComponent
                title="Experience"
                data={experience}
                modelName="experience"
                user={user}
            />
            <SectionComponent
                title="Education"
                data={education}
                modelName="education"
                user={user}
            />
            <SectionComponent
                title="Achievements"
                data={achievements}
                modelName="achievements"
                user={user}
            />
            <HobbiesComponent hobbies={hobbies} skills={skills} user={user} />
        </div>
    );
};

export default AboutCard;
