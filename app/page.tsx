import { ModalButton } from './components/Buttons';
import { HeroSection } from './Hero';
import styles from './styles/Page.module.css';

const Home = () => {
    return (
        <section className={styles.main}>
            <HeroSection />
            <ModalButton />
        </section>
    );
};

export default Home;
