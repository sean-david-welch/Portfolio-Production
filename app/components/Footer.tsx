import { FooterButtons, FooterInformation } from './FooterContent';
import styles from './styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <FooterInformation />
                <FooterButtons />
            </div>
        </footer>
    );
};

export default Footer;
