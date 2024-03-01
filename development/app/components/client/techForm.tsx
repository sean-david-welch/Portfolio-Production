'use client';
import styles from '../styles/Info.module.css';
import axios from 'axios';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const TechnologiesForm = () => {
    const router = useRouter();
    const [showTechForm, setShowTechForm] = useState(false);

    const techFields = [
        { name: 'title', type: 'text', defaultValue: '' },
        { name: 'description', type: 'text', defaultValue: '' },
        { name: 'image', type: 'text', defaultValue: '' },
    ];

    const createTechology = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget as HTMLFormElement);

        const body = {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            image: formData.get('image') as string,
        };

        const response = await axios.post('/api/tech', body);

        if (response.status === 200) {
            console.log('Project created successfully!');
        } else {
            console.error('Failed to create project', response);
        }

        setShowTechForm(false);
        router.refresh();
    };

    return (
        <section id={styles.form}>
            <button
                className={styles.btn}
                onClick={() => {
                    setShowTechForm(!showTechForm);
                }}>
                Create Technology
            </button>
            {showTechForm && (
                <form onSubmit={createTechology}>
                    {techFields.map(field => (
                        <div className={styles.key} key={field.name}>
                            <label htmlFor={field.name}>
                                {field.name.charAt(0).toUpperCase() +
                                    field.name.slice(1)}
                            </label>
                            <input
                                type={field.type}
                                name={field.name}
                                placeholder={field.name}
                            />
                        </div>
                    ))}
                    <button className={styles.btn} type="submit">
                        Save Info
                    </button>
                </form>
            )}
        </section>
    );
};

export default TechnologiesForm;
