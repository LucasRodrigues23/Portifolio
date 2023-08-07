import styles from './styles.module.scss'
import { FaArrowCircleUp } from 'react-icons/fa'
export default function Footer() {
    return (
        <footer className={styles.container}>
            <a href="#inicio"><FaArrowCircleUp /></a>
            <span>Lucas Rodrigues | Todos os direitos reservados</span>
        </footer>
    )
}