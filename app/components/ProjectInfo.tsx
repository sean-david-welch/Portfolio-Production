import styles from './styles/Info.module.css';

export const ProjectDisplay = () => {
    return (
        <div className={styles.projectDisplay}>
            <h1 className={styles.mainHeading}>Featured Projects:</h1>
            <h2 className={styles.heading}>
                See what applications I've built for other enterprises
            </h2>
        </div>
    );
};
