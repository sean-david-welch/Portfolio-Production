'use client';
import styles from '../styles/About.module.css';
import { DeleteButton } from './DeleteButton';

import { useState } from 'react';
import { createModel, updateModel } from '../utils/utils';
import { useRouter } from 'next/navigation';

export const AboutForm = ({ modelId }: { modelId?: string }) => {
    const router = useRouter();
    const [showAboutForm, setShowAboutForm] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (modelId) {
            await updateModel(event, modelId);
        } else {
            await createModel(event);
        }
        setShowAboutForm(false);
        router.refresh();
    };

    return (
        <section id={styles.form}>
            <button
                className={styles.btn}
                onClick={() => setShowAboutForm(!showAboutForm)}>
                Create Model
            </button>

            {showAboutForm && (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="model">Model:</label>
                    <select name="model" id="model">
                        <option value="about">About</option>
                        <option value="experience">Experience</option>
                        <option value="education">Education</option>
                        <option value="achievements">Achievements</option>
                        <option value="skills">Skills</option>
                        <option value="hobbies">Hobbies</option>
                    </select>

                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" required />

                    <label htmlFor="description">Description:</label>
                    <input name="description" id="description" />

                    <button className={styles.btn} type="submit">
                        Submit
                    </button>
                </form>
            )}
        </section>
    );
};
