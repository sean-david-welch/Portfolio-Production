'use client';

import styles from './styles/Info.module.css';

export const SkillsDisplay = () => {
    return (
        <section id="skills">
            <div className={styles.SkillsDisplay}>
                <h1 className={styles.mainHeading}>My Expertise</h1>
                <h2 className={styles.heading}>Skills & Technologies Used:</h2>
            </div>
        </section>
    );
};
