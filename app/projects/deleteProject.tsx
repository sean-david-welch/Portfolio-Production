'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';

interface DeleteProps {
    projectId: string;
}

export const DeleteButton: React.FC<DeleteProps> = ({ projectId }) => {
    const router = useRouter();

    const onDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        try {
            const response = await axios.delete(`/api/projects/${projectId}`);
            if (response.status >= 200 && response.status < 300) {
                router.push('/projects');
                router.refresh();
            } else {
                alert(`Error: ${response.status}`);
            }
        } catch (error) {
            alert(`Network error: ${error}`);
        }
    };

    return <button onClick={onDelete}>Delete Project</button>;
};
