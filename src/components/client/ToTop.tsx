'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ToTopButton: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            id="toTopButton"
            aria-label="scroll-to-top-button"
            className="toTopButton"
            onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} size="2x" />
        </button>
    );
};

export default ToTopButton;
