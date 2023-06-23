import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
    modelId: string;
    modelName: string;
}

export const DeleteButton: React.FC<Props> = ({ modelId, modelName }) => {
    const router = useRouter();

    const onDelete = async (
        event: React.MouseEvent<HTMLButtonElement>,
        modelId: string,
        modelName: string
    ) => {
        event.preventDefault();

        try {
            const response = await axios.delete(`/api/about/${modelId}`, {
                data: {
                    model: modelName,
                    id: modelId,
                },
            });
            console.log('reponse:', response);

            if (response.status >= 200 && response.status < 300) {
                router.refresh();
            } else {
                alert(`Error: ${response.status}`);
            }
        } catch (error) {
            alert(`Network error: ${error}`);
        }
    };

    return (
        <button onClick={event => onDelete(event, modelId, modelName)}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
};
