'use client';
import axios from 'axios';
import styles from '../styles/About.module.css';

import { useState } from 'react';
import {
    About,
    Achievements,
    Education,
    Experience,
    Hobbies,
    Skills,
} from '@prisma/client';
import { useRouter } from 'next/navigation';

export const AboutForm = ({}) => {
    const [showAboutForm, setShowAboutForm] = useState(false);

    const router = useRouter();

    const prepareData = (model: string, formData: FormData) => {
        const data: any = {
            title: formData.get('title') as string,
        };

        if (
            model === 'about' ||
            model === 'experience' ||
            model === 'education' ||
            model === 'achievements'
        ) {
            data.description = formData.get('description') as string;
        }

        return data;
    };

    const createModel = async (event: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const model = formData.get('model') as string;

        const body = {
            model: model,
            data: prepareData(model, formData),
        };

        const response = await axios.post('/api/about', body);

        if (response.status === 200) {
            console.log('Project created successfully!');
        } else {
            console.error('Failed to create project', response);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await createModel(event);
        setShowAboutForm(false);
        router.refresh();
    };

    return (
        <section id={styles.form}>
            <button onClick={() => setShowAboutForm(!showAboutForm)}>
                Reaveal
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

                    <button type="submit">Submit</button>
                </form>
            )}
        </section>
    );
};
