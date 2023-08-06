import Aside from "@/components/aside";
import Header from "@/components/header";
import Projects from "@/components/projects";
import styles from './styles.module.scss'
import Contacts from "@/components/contatcs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Aside />
      <Projects />
      <Contacts />
    </main>
  )
}
