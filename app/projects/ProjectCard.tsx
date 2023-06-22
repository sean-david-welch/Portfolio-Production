import styles from './styles/projects.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
    id: string;
    name: string | null;
    description: string | null;
    image: string | null;
    tags: string[] | null;
}

interface Props {
    project: Project;
}

const ProjectCard = ({
    project: { id, name, description, image, tags },
}: Props) => {
    return (
        <div className={styles.projectCard}>
            <Link href={`projects/${id}`}>
                <Image
                    src={image ?? '/default.jpg'}
                    alt="project image"
                    height={500}
                    width={650}></Image>
                <h1>{name}</h1>
                <p>{description}</p>
                <ul>
                    {tags?.map(tag => (
                        <button className={styles.tagButton}>
                            <li key={tag}>{tag}</li>
                        </button>
                    ))}
                </ul>
            </Link>
        </div>
    );
};

export default ProjectCard;
