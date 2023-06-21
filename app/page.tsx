import { ModalButton } from './components/Buttons';
import styles from './styles/Page.module.css';
import dynamic from 'next/dynamic';

const Home = () => {
    const Hero = dynamic(() => import('./components/Hero'));

    return (
        <section className={styles.main}>
            <Hero />
            <ModalButton />
        </section>
    );
};

export default Home;
