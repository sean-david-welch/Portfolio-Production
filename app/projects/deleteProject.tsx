'use client';

import axios from 'axios';
import { deleteProject } from './actions';
import { useRouter } from 'next/navigation';

interface DeleteProps {
    projectId: string;
}

export const DeleteButton: React.FC<DeleteProps> = ({ projectId }) => {
    axios.defaults.baseURL = 'http://localhost:3000/api';

    const router = useRouter();

    const onDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        deleteProject({ projectId });
        router.push('/projects');
    };

    return <button onClick={onDelete}>Delete Project</button>;
};
