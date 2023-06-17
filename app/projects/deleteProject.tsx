'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';

interface DeleteProps {
    projectId: string;
}

export const DeleteButton: React.FC<DeleteProps> = ({ projectId }) => {
    const router = useRouter();

    const onDelete = async () => {
        await axios.delete(`/projects/${projectId}`);
        router.replace('projects');
        console.log('project deleted');
    };

    return <button onClick={onDelete}>Delete Project</button>;
};
