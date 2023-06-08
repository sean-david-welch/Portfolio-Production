import Link from 'next/link';
import styles from './styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <ul className={styles.footerList}>
                    <li className={styles.footerListItem}>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
