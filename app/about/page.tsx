import AboutCard from './AboutCard';
import styles from './styles/About.module.css';
import { getAboutData } from './utils/getAbout';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'Information about Sean',
};

const AboutPage = async () => {
    const models = await getAboutData();

    const {
        user,
        about,
        experience,
        education,
        achievements,
        skills,
        hobbies,
    } = models;

    if (!models)
        return (
            <section id={styles.AboutPage}>
                <h1>No Data Found</h1>
            </section>
        );

    return (
        <section id={styles.AboutPage}>
            <div className={styles.cards}>
                <AboutCard models={models} />
            </div>
        </section>
    );
};

export default AboutPage;
