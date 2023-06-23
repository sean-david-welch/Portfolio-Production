import styles from './styles/projects.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@prisma/client';

interface Props {
    project: Project;
}

const ProjectCard = ({ project: { id, name, blurb, image, tags } }: Props) => {
    return (
        <div className={styles.projectCard}>
            <Link href={`projects/${id}`}>
                <Image
                    src={image ?? '/default.jpg'}
                    alt="project image"
                    height={500}
                    width={650}></Image>
                <h1>{name}</h1>
                <p>{blurb}</p>
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
