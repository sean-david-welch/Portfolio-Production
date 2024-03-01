import { FooterButtons, FooterInformation } from './FooterContent';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <FooterButtons />
                <FooterInformation />
            </div>
        </footer>
    );
};

export default Footer;
