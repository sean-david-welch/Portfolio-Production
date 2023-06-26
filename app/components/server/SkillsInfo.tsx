import styles from '../styles/Info.module.css';
import TechItems from '../client/techView';
import TechnologiesForm from '../client/techForm';

import { prisma } from '@/lib/primsa';
import { getSessionAndUser } from '@/app/utils/apiUtils';

export const SkillsDisplay = async () => {
    const { user } = await getSessionAndUser();
    const technologies = await prisma.technologies.findMany();

    return (
        <section id="skills">
            <div className={styles.SkillsDisplay}>
                <h1 className={styles.mainHeading}>My Expertise</h1>
                <h2 className={styles.heading}>Skills & Technologies Used:</h2>
            </div>
            <TechItems technologies={technologies} />
            {user && user.role === 'ADMIN' && <TechnologiesForm />}
        </section>
    );
};
