import styles from './styles.module.scss';

export default function NavBar() {

    return (
        <>
            <nav className={styles.rgb}></nav>
            <div className={styles.container}>
                <div>
                    <h1>Lucas Rodrigues</h1>
                    <span className={styles.textBg}>Lucas Rodrigues</span>
                    <nav className={styles.nav}>
                        <a href="#inicio">Inicio</a>
                        <a href="#projetos">Projetos</a>
                        <a href="#contato">Contato</a>
                    </nav>
                </div>
            </div>
        </>
    )
}