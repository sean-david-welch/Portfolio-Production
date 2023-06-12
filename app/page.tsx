import { ModalButton } from './components/Buttons';
import styles from './styles/Page.module.css';

const Home = () => {
    return (
        <section className={styles.main}>
            <h1 className={styles.mainHeading}>Hello World</h1>
            <ModalButton />
        </section>
    );
};

export default Home;
