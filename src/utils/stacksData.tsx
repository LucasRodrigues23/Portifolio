import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import { SiDjango, SiExpress, SiStyledcomponents, SiSass, SiPrisma } from "react-icons/si";
import {
    FaDocker,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaNode,
    FaReact,
} from "react-icons/fa";

const stackData = [
    { title: "HTML", img: <FaHtml5 title='HTML' />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "CSS", img: <FaCss3Alt title='CSS' />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "JS", img: <FaJs title='JS' />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { title: "TypeScript", img: <SiTypescript title='TypeScript' />, url: "https://www.typescriptlang.org" },
    { title: "React", img: <FaReact title='React' />, url: "https://react.dev" },
    { title: "Next.js", img: <TbBrandNextjs title='Next.js' />, url: "https://nextjs.org" },
    { title: "Styled-components", img: <SiStyledcomponents title='Styled-components' />, url: "https://styled-components.com" },
    { title: "Sass", img: <SiSass title='Sass' />, url: "https://sass-lang.com" },
    { title: "Node JS", img: <FaNode title='Node JS' />, url: "https://nodejs.org/en" },
    { title: "PostgreSQL", img: <SiPostgresql title='PostgreSQL' />, url: "https://www.postgresql.org" },
    { title: "Express", img: <SiExpress title='Express' />, url: "https://expressjs.com/pt-br/" },
    { title: "Prisma", img: <SiPrisma title='Prisma' />, url: "https://www.prisma.io" },
    { title: "Python", img: <FaPython title='Python' />, url: "https://www.python.org" },
    { title: "Django", img: <SiDjango title='Django' />, url: "https://www.djangoproject.com" },
    { title: "Git", img: <FaGit title='Git' />, url: "https://git-scm.com" },
    { title: "Docker", img: <FaDocker title='Docker' />, url: "https://www.docker.com" },

];


export default stackData