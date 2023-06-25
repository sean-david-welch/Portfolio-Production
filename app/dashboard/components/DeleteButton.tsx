import axios from 'axios';
import styles from '../styles/Account.module.css';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const DeleteButton = async () => {
    const router = useRouter();

    const deleteUser = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();

        try {
            const response = await axios.delete(`/api/users`);
            if (response.status >= 200 && response.status < 300) {
                router.push('/');
            } else {
                alert(`Error: ${response.status}`);
            }
        } catch (error) {
            alert(`Network error: ${error}`);
        }
    };

    return (
        <button className={styles.btn} onClick={deleteUser}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
};
