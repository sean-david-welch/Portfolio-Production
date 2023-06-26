import styles from './styles/Page.module.css';
import HeroSection from './components/Hero';
import { InfoSection } from './components/Info';

const Home = () => {
    return (
        <section className={styles.main}>
            <HeroSection />
            <InfoSection />
        </section>
    );
};

export default Home;
