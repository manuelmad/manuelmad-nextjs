import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Nothing_You_Could_Do } from 'next/font/google';
import localFont from 'next/font/local';


const work_sans = localFont({
  display: 'swap',
  src: [
      {
        path: '../public/WorkSans-VariableFont_wght.ttf',
        weight: '300',
        style: 'normal',
      }
    ]
  }
)

const nothing = Nothing_You_Could_Do({
  subsets: ['latin'],
  weight: '400',
  }
)


export default function Home() {

  // const linkToProjects = ()=> {
  //   window.location.href='/projects';
  // }
  return (
    <>
      <Header 
        projects="PROJECTS"
        aboutme="ABOUT ME"
        studies="STUDIES"
        contact="CONTACT"
      />
      <main>
        <section className={styles.introduction}>
            <div className={styles.introduction_left}>
                <h1 className={work_sans.className}>Hi, I'm<br/>Manuel Araujo</h1>
                <h2 className={nothing.className}>Frontend Developer</h2>
                <p><button><Link href="/projects">MY PROJECTS</Link></button></p>
            </div>
            <div className={styles.introduction_right}>
                <Image src="/imgs/manuel-araujo-picture.png" width={93.5} height={115} alt="Manuel Araujo picture"/>
            </div>   
        </section>
        <section id="personal-info" className={styles.personal_info}>
            <div className={styles.personal_info__left}>
                <Image src="/imgs/about-me.png" width={130} height={116} alt="about me img"/>
                <h1>About me</h1>
                <p>La primera carrera universitaria que emprendí fue la Ingeniería de Petróleo, profesión que me encuentro ejerciendo actualmente.</p>
                <p>Un poco antes de trabajar en la industria petrolera, completé otra carrera universitaria: Licenciatura en Educación, mención Matemática y Física, la cual ejercí por cerca de 2 años.</p>
                <p>En este momento estoy incursionando en una nueva industria, una que supone nuevos retos y experiencias, donde puedo crear, innovar y crecer tanto personal como profesionalmente: La industria de la tecnología, en el Desarrollo Web.</p>
            </div>
            <div className={styles.personal_info__right}>
                <h1>About me</h1>
                <p>La primera carrera universitaria que emprendí fue la Ingeniería de Petróleo, profesión que me encuentro ejerciendo actualmente.</p>
                <p>Un poco antes de trabajar en la industria petrolera, completé otra carrera universitaria: Licenciatura en Educación, mención Matemática y Física, la cual ejercí por cerca de 2 años.</p>
                <p>En este momento estoy incursionando en una nueva industria, una que supone nuevos retos y experiencias, donde puedo crear, innovar y crecer tanto personal como profesionalmente: La industria de la tecnología, en el Desarrollo Web.</p>
            </div>
        </section>
        <section id="curriculum" className={styles.curriculum}>
            <div className={styles.curriculum_left}>
                <h1>Estudios Realizados</h1>
                <h2 className={nothing.className}><u>2022 - 2023</u></h2>
                <p>Platzi.</p>
                <ul>Escuela de Desarrollo Web.
                    <li>Curso de Frontend Developer.</li>
                    <li>Curso Profesional de Git y GitHub.</li>                  
                    <li>Curso de HTML y CSS.</li>
                    <li>Curso Básico y Práctico de JavaScript.</li>
                    <li>Curso de Responsive Design: Maquetación Mobile First.</li>
                    <li>Curso Profesional de CSS Grid Layout.</li>
                    <li>Cursos Básico e Intermedio de Programación Orientada a Objetos con JavaScript.</li>
                    <li>Curso de ECMAScript 6+.</li>
                    <li>Curso de Asincronismo con JavaScript.</li>
                    <li>Curso de Gestión de Dependencias y Paquetes con NPM.</li>
                    <li>Curso de Manipulación de Arrays en JavaScript.</li>
                    <li>Curso Profesional de Consumo de API REST con JavaScript.</li>
                    <li>Curso de Introducción a Empaquetadores Web.</li>
                    <li>Curso de Manipulación del DOM.</li>
                    <li>Curso Básico de Web Components con JavaScript.</li>
                    <li>Curso de Introducción a React.</li>
                </ul>
                <h2 className={nothing.className}><u>2013</u></h2>
                <p>La Universidad del Zulia (L.U.Z.), Maracaibo, Venezuela.<br/>Título obtenido: Licenciado en Educación. Mención: Matemática y Física.</p>
                <h2 className={nothing.className}><u>2008</u></h2>
                <p>La Universidad del Zulia (L.U.Z.), Maracaibo, Venezuela.<br/>Título obtenido: Ingeniero de Petróleo.</p>  
            </div>
            <div className={styles.curriculum_right}>
                <h1>Habilidades</h1>
                <p>Alto sentido de la responsabilidad y la puntualidad.</p>
                <p>Buena capacidad de organización y planificación.</p>
                <p>Expresión de respeto hacia los compañeros de trabajo.</p>
                <p>Alto nivel de análisis y solución de problemas.</p>
                <p>Buen dominio del idioma Inglés.</p>

                <h1 className={styles.technical_habilities}>Habilidades Técnicas</h1>
                <div className={styles.habilities_container}>
                    <p><Image src="/imgs/html-5.png" alt="logo html 5" width={512} height={512}/></p>
                    <p><Image src="/imgs/css-3.png" alt="logo css 3" width={512} height={512}/></p>
                    <p><Image src="/imgs/js.png" alt="logo javascript" width={512} height={512}/></p>
                    <p><Image src="/imgs/react.png" alt="logo react js" width={40} height={40}/></p>
                    <p><Image src="/imgs/git.png" alt="logo git js" width={512} height={512}/></p>
                    <p><Image src="/imgs/github.png" alt="logo github js" width={512} height={512}/></p>
                    <p><Image src="/imgs/npm.png" alt="logo npm js" width={40} height={40}/></p>
                </div>
            </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
