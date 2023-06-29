import styles from '../styles/PaymentOptions.module.css';
import Link from 'next/link';

const SuccessPage = async () => {
    return (
        <section id={styles.success}>
            <h1>Payment Succeeded, Thank you for your order</h1>
            <Link href={'/'}>
                <button className={styles.btn}>Return Home</button>
            </Link>
        </section>
    );
};

export default SuccessPage;
