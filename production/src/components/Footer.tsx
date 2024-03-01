import styles from './styles/Footer.module.css';

import ToTopButton from './client/ToTop';
import { FooterButtons, FooterInformation } from './server/FooterContent';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <FooterButtons />
                <FooterInformation />
            </div>
            <ToTopButton />
        </footer>
    );
};

export default Footer;
