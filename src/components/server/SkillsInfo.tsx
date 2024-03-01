import styles from '../styles/Info.module.css';
import Link from 'next/link';
import TechItems from '../client/techView';
import TechnologiesForm from '../client/techForm';

import { prisma } from '@/lib/prisma';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { getSessionAndUser } from '@/utils/utils';

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
            <Link href={'#projects'}>
                <button className={styles.btn}>
                    Check out my Work
                    <FontAwesomeIcon icon={faArrowDown} />
                </button>
            </Link>
        </section>
    );
};
