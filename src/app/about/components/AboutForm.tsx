'use client';
import styles from '../styles/About.module.css';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DeleteButton } from './DeleteButton';

import { createModel, getModelFields, updateModel } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const AboutForm = ({
    modelId,
    modelName,
}: {
    modelId?: string;
    modelName?: string;
}) => {
    const router = useRouter();
    const modelFields = getModelFields(modelName);
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
            <div className={styles.buttonsGrid}>
                <button
                    className={styles.btn}
                    onClick={() => setShowAboutForm(!showAboutForm)}>
                    {modelId ? (
                        <FontAwesomeIcon icon={faPenToSquare} />
                    ) : (
                        'Create Model'
                    )}
                </button>
                {modelId && modelName && (
                    <DeleteButton modelId={modelId} modelName={modelName} />
                )}
            </div>

            {showAboutForm && (
                <form onSubmit={handleSubmit}>
                    {modelFields.map(field =>
                        field.fieldType === 'select' ? (
                            <div key={field.name}>
                                <select
                                    name={field.name}
                                    defaultValue={field.defaultValue}>
                                    {field.options?.map(option => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ) : (
                            <input
                                key={field.name}
                                type={field.type}
                                name={field.name}
                                defaultValue={field.defaultValue}
                                placeholder={field?.defaultValue || field.name}
                            />
                        )
                    )}
                    <button className={styles.btn} type="submit">
                        Submit
                    </button>
                </form>
            )}
        </section>
    );
};
