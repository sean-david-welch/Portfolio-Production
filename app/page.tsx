import styles from './styles/Page.module.css';
import HeroSection from './components/Hero';

const Home = () => {
    return (
        <section className={styles.main}>
            <HeroSection />
        </section>
    );
};

export default Home;
