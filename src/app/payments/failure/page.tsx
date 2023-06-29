import styles from '../styles/PaymentOptions.module.css';
import Link from 'next/link';

const FailurePage = async () => {
    return (
        <section id={styles.failure}>
            <h1>Payment Failed</h1>
            <Link href={'/'}>
                <button className={styles.btn}>Continue Shopping</button>
            </Link>
        </section>
    );
};

export default FailurePage;
