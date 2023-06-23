import AboutComponent from './components/AboutComponent';
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
        </div>
    );
};

export default AboutCard;
