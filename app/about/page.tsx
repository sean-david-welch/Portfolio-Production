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
            <>
                <h1>No Data Found</h1>
            </>
        );

    return (
        <section>
            <div className={styles.about}></div>
            <div className={styles.experience}></div>
            <div className={styles.education}></div>
            <div className={styles.achievements}></div>
            <div className={styles.skills}></div>
            <div className={styles.hobbies}></div>
        </section>
    );
};

export default AboutPage;
