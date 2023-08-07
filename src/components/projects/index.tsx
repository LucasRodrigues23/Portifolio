import { Righteous } from 'next/font/google'
import styles from './styles.module.scss'
import ProjecstCard from './projectsCard'
import { api } from '@/services/api';

const righteous = Righteous({ weight: '400', subsets: ['latin'] })

export default async function Projects() {
    
    const response = await api.get('');
    const projects = response.data;

    return (
        <>
            <div id="projetos"></div>
            <section id="projetos" className={styles.container}>
                <h3 className={righteous.className}>Projetos</h3>
                <ul>
                    {projects.map((project: any, i: any) => <ProjecstCard key={i} project={project} />)}
                </ul>
            </section>
        </>

    )
}