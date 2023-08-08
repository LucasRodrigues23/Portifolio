import { Righteous } from 'next/font/google'
import styles from './styles.module.scss'
import ProjecstCard from './projectsCard'
import { api } from '@/services/api';

const righteous = Righteous({ weight: '400', subsets: ['latin'] })

export default async function Projects() {

    /* const response = await api.get(''); */
    const projects = /* response.data */[{
        id: 1,
        name: 'Testando',
        description: "testando testando testando testando testando testando testando testando testando testando",
        language: "Javascript",
        html_url: "https://github.com/project-lets-cook/frontend"
    }]

    return (
        <>
            <div id="projetos"></div>
            <section id="projetos" className={styles.container}>
                <h3 className={righteous.className}>Projetos</h3>
                <ul>
                    {projects ? projects.map((project: any) => <ProjecstCard key={project.id} project={project} />) : <span>Algo deu errado! :(</span>}
                </ul>
            </section>
        </>

    )
}