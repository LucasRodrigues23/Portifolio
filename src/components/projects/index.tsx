import { Righteous } from 'next/font/google'
import styles from './styles.module.scss'

const righteous = Righteous({ weight: '400', subsets: ['latin'] })

export default function Projects() {
    return (
        <>
            <div id="projetos"></div>
            <section id="projetos" className={styles.container}>
                <h3 className={righteous.className}>Projetos</h3>
                <ul></ul>
            </section>
        </>

    )
}