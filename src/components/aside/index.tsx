import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import styles from './styles.module.scss'
import Link from 'next/link'
export default function Aside() {
    return (
        <>
            <div className={styles.asideBg}></div>
            <aside className={styles.asideContainer}>
                <Link href="https://www.linkedin.com/in/dev-lucasrodrigues23/" target='blank'><AiFillLinkedin /></Link>
                <Link href="https://www.linkedin.com/in/dev-lucasrodrigues23/" target='blank'><AiFillGithub /></Link>
                <Link href="https://www.instagram.com/lucaszrodrigues23/" target='blank'><AiFillInstagram /></Link>
            </aside >
        </>
    )
}