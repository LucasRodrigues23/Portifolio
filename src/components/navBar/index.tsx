import { Righteous } from 'next/font/google';
import styles from './styles.module.scss';

const righteous = Righteous({ weight: '400', subsets: ['latin'] })

export default function NavBar() {


    return (
        <>
            <div className={styles.container}>
                <div>
                    <h1 className={righteous.className}>Lucas Rodrigues</h1>
                    <nav className={styles.nav}>
                        <a href="#inicio">Inicio</a>
                        <a href="#projetos">Projetos</a>
                        <a href="#contato">Contato</a>
                    </nav>
                    <input type="checkbox" id="menuToggle" className={styles.sandwich} />
                    <label htmlFor="menuToggle" className={styles.sandwichLabel}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <nav className={styles.sandwichMenu}>
                        <a href="#inicio">Inicio</a>
                        <a href="#projetos">Projetos</a>
                        <a href="#contato">Contato</a>
                    </nav>
                </div>
            </div>
        </>
    )
}


