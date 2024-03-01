import styles from './styles/Page.module.css';
import HeroSection from './components/client/Hero';
import { InfoSection } from './components/server/Info';

const Home = () => {
    return (
        <section className={styles.main}>
            <HeroSection />
            <InfoSection />
        </section>
    );
};

export default Home;
