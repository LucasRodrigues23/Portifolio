import styles from './styles.module.scss'
import { BiLogoWhatsappSquare, } from 'react-icons/bi'
import { MdOutgoingMail } from 'react-icons/md'
import { BsDiscord } from 'react-icons/bs'
export default function Contacts() {
    return (
        <>
            <div id="contato"></div>
            <section className={styles.container}>
                <h3>Contatos</h3>
                <ul>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=+55+41997648717}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os" target='blank'>
                            <BiLogoWhatsappSquare />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:lcs.rs23@gmail.com">
                            <MdOutgoingMail />
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}