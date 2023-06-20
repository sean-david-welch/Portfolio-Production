'use client';

import { deleteProject } from './actions';
import { useRouter } from 'next/navigation';

interface DeleteProps {
    projectId: string;
    user: {} | null;
}

export const DeleteButton: React.FC<DeleteProps> = (
    { projectId },
    { user }
) => {
    const router = useRouter();

    const onDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        deleteProject({ projectId }, { user });
        router.push('/projects');
    };

    return <button onClick={onDelete}>Delete Project</button>;
};
