import { Introduction } from './Intro';
import { ProjectDisplay } from './ProjectInfo';
import { SkillsDisplay } from './SkillsInfo';
import styles from './styles/Info.module.css';

export const InfoSection = () => {
    return (
        <section id="infoSection">
            <div className={styles.info}>
                <Introduction />
                <SkillsDisplay />
                <ProjectDisplay />
            </div>
        </section>
    );
};
