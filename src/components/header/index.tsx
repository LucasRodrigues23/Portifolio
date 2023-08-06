import StacksCarrousel from './stacksCarousel'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <>
            <div id='inicio'></div>
            <header className={styles.header}>
                <div>
                    <span>L</span>
                    <span>U</span>
                    <span>C</span>
                    <span>A</span>
                    <span>S</span>
                    <span> </span>
                    <span>R</span>
                    <span>O</span>
                    <span>D</span>
                    <span>R</span>
                    <span>I</span>
                    <span>G</span>
                    <span>U</span>
                    <span>E</span>
                    <span>S</span>
                </div>
                <h4>
                    Desenvolvedor FullStack
                </h4>
                <StacksCarrousel />
            </header>
        </>
    )
}