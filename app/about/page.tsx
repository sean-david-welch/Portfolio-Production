import AboutCard from './components/AboutCard';
import styles from './styles/About.module.css';
import { getAboutData } from './utils/getAbout';
import { AboutForm } from './components/AboutForm';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'Information about Sean',
};

const AboutPage = async () => {
    const data = await getAboutData();

    if (!data)
        return (
            <section id={styles.AboutPage}>
                <h1>No Data Found</h1>
            </section>
        );

    const {
        user,
        about,
        experience,
        education,
        achievements,
        skills,
        hobbies,
    } = data;

    return (
        <section id={styles.AboutPage}>
            <div className={styles.cards}>
                <AboutCard models={data} />
                {user && user.role === 'ADMIN' && <AboutForm />}
            </div>
        </section>
    );
};

export default AboutPage;
