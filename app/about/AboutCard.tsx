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
    about: About;
    achievements: Achievements;
    education: Education;
    experience: Experience;
    hobbies: Hobbies;
    skills: Skills;
}

interface Props {
    models: Models;
}

const AboutCard = ({
    models: { about, achievements, education, experience, hobbies, skills },
}: Props) => {};
