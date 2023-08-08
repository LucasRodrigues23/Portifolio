import { FaGithub, FaShare } from 'react-icons/fa'
import styles from './styles.module.scss'
interface ProjecstCardProps {
    project: any
}
export default function ProjecstCard({ project }: ProjecstCardProps) {

    return (
        <li className={styles.card}>
            <h4 className={styles.title}>{project.name}</h4>
            <span className={styles.language}>Linguagem:{project.language ? project.language : 'linguagem não definida'}</span>
            <span className={styles.descripton}>Description: {project.description?.substring(0, 129)}</span>
            <div className={styles.btBox}>
                <a href={project.html_url} target='blank'><FaGithub /> GitHub</a>
                {project.homepage && <a href={project.homepage} target='blank'><FaShare />Veja Demo</a>}
            </div>
        </li>
    )
}