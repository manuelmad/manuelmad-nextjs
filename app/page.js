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
        path: '../public/fonts/WorkSans-VariableFont_wght.ttf',
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
                <Image src="/imgs/manuel-araujo-picture.png" width={305} height={377} alt="Manuel Araujo picture"/>
            </div>   
        </section>
        <section id="personal-info" className={styles.personal_info}>
            <div className={styles.personal_info__left}>
                <Image src="/imgs/about-me.png" width={479} height={428} alt="about me img"/>
                <h1>About me</h1>
                <p>The first professional career I accomplished was Petroleum Engineering, which I’m currently practicing.</p>
                <p>Short before I started to work in the Petroleum Industry, I got another degree: Education, in Math and Physics; which I practiced for about 2 years.</p>
                <p>Right now, I’m coming through a new industry, that brings me new challenges and experiences, where I can create, innovate and grow as a person and as a professional as well: Tech Industry, specifically in Web Development.</p>
            </div>
            <div className={styles.personal_info__right}>
                <h1>About me</h1>
                <p>The first professional career I accomplished was Petroleum Engineering, which I’m currently practicing.</p>
                <p>Short before I started to work in the Petroleum Industry, I got another degree: Education, in Math and Physics; which I practiced for about 2 years.</p>
                <p>Right now, I’m coming through a new industry, that brings me new challenges and experiences, where I can create, innovate and grow as a person and as a professional as well: Tech Industry, specifically in Web Development.</p>
            </div>
        </section>
        <section id="curriculum" className={styles.curriculum}>
            <div className={styles.curriculum_left}>
                <h1>Studies</h1>
                <h2 className={nothing.className}><u>2022 - 2023</u></h2>
                <p>Platzi.</p>
                <ul>Web Development Scholl.
                    <li>Frontend Developer.</li>
                    <li>Git and GitHub (Professional).</li>                  
                    <li>HTML and CSS.</li>
                    <li>Basic and Practical JavaScript.</li>
                    <li>Responsive Design: Mobile First.</li>
                    <li>Professional CSS Grid Layout.</li>
                    <li>Basic and Intermediate OOP with JavaScript.</li>
                    <li>ECMAScript 6+.</li>
                    <li>Asynchronism with JavaScript.</li>
                    <li>Management of Dependencies y Packages with NPM.</li>
                    <li>Arrays Methods with JavaScript.</li>
                    <li>REST API's with JavaScript.</li>
                    <li>Webpack.</li>
                    <li>DOM Manipulation.</li>
                    <li>Introduction to React.</li>
                </ul>
                <h2 className={nothing.className}><u>2013</u></h2>
                <p>La Universidad del Zulia (L.U.Z.), Maracaibo, Venezuela.<br/>Degree: Education Graduate. Mention: Math and Physics.</p>
                <h2 className={nothing.className}><u>2008</u></h2>
                <p>La Universidad del Zulia (L.U.Z.), Maracaibo, Venezuela.<br/>Degree: Petroleum Engineer.</p>  
            </div>
            <div className={styles.curriculum_right}>
                <h1>Skills</h1>
                <p>Responsible and punctual.</p>
                <p>Capacity to organize and planning.</p>
                <p>Respectful to coworkers.</p>
                <p>Capacity to analyze and solve problems.</p>

                <h1 className={styles.technical_habilities}>Technical Skills</h1>
                <div className={styles.habilities_container}>
                    <p><Image src="/imgs/html-5.png" alt="logo html 5" width={512} height={512}/></p>
                    <p><Image src="/imgs/css-3.png" alt="logo css 3" width={512} height={512}/></p>
                    <p><Image src="/imgs/js.png" alt="logo javascript" width={512} height={512}/></p>
                    <p><Image src="/imgs/react.png" alt="logo react js" width={4096} height={4096}/></p>
                    <p><Image src="/imgs/Nextjs-logo.svg.png" alt="logo next js js" width={2560} height={520}/></p>
                    <p><Image src="/imgs/git.png" alt="logo git js" width={512} height={512}/></p>
                    <p><Image src="/imgs/github.png" alt="logo github js" width={512} height={512}/></p>
                    <p><Image src="/imgs/npm.png" alt="logo npm js" width={1600} height={1600}/></p>
                </div>
            </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
