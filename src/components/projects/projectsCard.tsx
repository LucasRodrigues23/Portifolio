import { FaGithub, FaShare } from 'react-icons/fa'
import styles from './styles.module.scss'
interface ProjecstCardProps {
    project: any
}
export default function ProjecstCard({ project }) {

    return (
        <li className={styles.card}>
            <h4>{project.name}</h4>
            <span className={styles.title}>Linguagem:{project.language ? project.language : 'linguagem não definida'}</span>
            <span className={styles.cat}>Description: {project.description?.substring(0, 129)}</span>
            <div className={styles.btBox}>
                <a href={project.html_ur}><FaGithub /> GitHub</a>
                {project.homepage && <a href={project.homepage}><FaShare />Veja Demo</a>}
            </div>
        </li>
    )
}