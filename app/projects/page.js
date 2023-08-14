import Image from 'next/image';
import Link from 'next/link';
import './projects.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import localFont from 'next/font/local';


const work_sans = localFont({
  display: 'swap',
  src: [
      {
        path: '../../public/fonts/WorkSans-VariableFont_wght.ttf',
        weight: '300',
        style: 'normal',
      }
    ]
  }
)

export default function Projects() {
    return (
        <>
            <Header 
                projects="PROJECTS"
                aboutme="ABOUT ME"
                studies="STUDIES"
                contact="CONTACT"
            />
            <main>
                <section className="introduction">
                    <div className="introduction-left">
                        <h1 className={work_sans.className}>My Projects</h1>
                        <p>
                            <Link  href="/#contacto">CONTACT ME</Link>
                        </p>
                    </div>
                    <div className="introduction-right">
                        <Image src="/imgs/manuel-araujo-picture.png" width={305} height={377} alt="Manuel Araujo picture"/>
                    </div>
                </section>
                <section className="casing-design justified-left">
                    <h1>Casing Design.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UClP-DTPBxA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>This web app allows to design every feature of the casings to be used in oil wells, which will cover the borehole in each phase of the drilling plan.</p>
                    <p>Starting with the number of casing strings and their seating depths, including an adjustment based in critical conditions; following with the selection of diameters and connections of every pipe, going through the design of their nominal weight and steel grade, and finally representing all the results obtained in a schematic diagram.</p>
                </section>
                <section className="planetageek-webpage justified-right">
                    <h1>Landing Page for Planeta Geek.</h1>
                    <Image src="/imgs/planeta-geek-webpage.png" alt="imagen ejemplo de página web planeta geek" width={1893} height={892}/>
                    <p>Planeta Geek is an excellent Venezuelan tv show based on videogames, tv series, movies, japanese animation and esports.</p>
                    <p>I created this landing page as a recognition for their effort, and also give them the chance to have more resources to reach new people.</p>
                    <p>The landging page includes a “web apps” section, where I included the links to some applications I’ve made to help them with the activities they perform for the public, including a Planeta Geek Videogame I developed with JS.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg><a href="https://planetageek.netlify.app" target="_blank">GO TO APP</a>
                    </p>
                </section>
                <section className="videojuegos justified-left">
                    <h1>Videogames App.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eWY1OrTdAMY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>A single-page application.</p>
                    <p>Consuming the API from RAWG (<a href="https://rawg.io/" target="_blank">rawg.io</a>) to create an inventory of the user’s games.</p>
                    <p>The user can search a game by name and add it in 1 of the 3 available categories: played, playing and to play. Also can delete any game from any category.</p>
                    <p>Clicking on the image of any game, a “details” view will be available.</p>
                    <p>The app uses localstorage to preserve data.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg><a href="https://manuelmad.github.io/API-REST/" target="_blank">GO TO APP</a>
                    </p>
                </section>
                <section className="dolce-vita justified-right">
                    <h1>Planeta Geek Videogame.</h1>
                    <Image src="/imgs/videogame-pg-cover.png" width={1844} height={872} alt='Img planeta geek videogame'/>
                    <p>I’ve created a short RPG videogame, with only 3 levels and a final scene.</p>
                    <p>I put in practice some new concepts like: stablishing contact points of characters and objects as well as determining their collision, defining the actions due to those collisions, simultaneous render of several elements on the canvas, use of the setInterval () and setTimeout() functions, detection of the “key press” event, animations with sprites, etc.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg><a href="https://planetageek-videogame.netlify.app/" target="_blank">GO TO APP</a>
                    </p>
                </section>
                <section className="admin-condo justified-left">
                    <h1>Receipts Generator.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/38yGQ5b1LVE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>I’ve created this web app so the administrator of a group of 100 houses can now generate customized receipts for the owners of each house by importing an Excel file and clicking a few buttons.</p>
                    <p>He can then download any receipt in .pdf format, instead of creating each receipt individually (100 times) as he used to.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg><a href="https://yacambu.netlify.app/" target="_blank">GO TO APP</a>
                    </p>
                </section>
                <section className="lenin-caraballo justified-right">
                    <h1>Budget Calculator for La Dolce Vita.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pYeE2LPqQBg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>An application made with React.</p>
                    <p>This web app is used by the owners of the cake shop “La Dolce Vita” to calculate budgets for their clients.</p>
                </section>
                <section className="formation-pressures justified-left">
                    <h1>Pore and fracture pressures calculation.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QVX95zT1mUo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>From seismic data, we can determine the pore (by using Pennebaker correlation) and fracture (by using Ben Eaton equation) pressures of the formations in the subsurface, before starting a well drilling.</p>
                </section>
                <section className="well-trajectory justified-right">
                    <h1>Directional Wells Trajectory Design.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JLMksGhN3VU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>This application takes the 6 values inputted by the user and calculates the needed parameters to graph the trajectory of a directional S shaped well.</p>
                    <p>In the graph, it’s shown the TVD, MD and Vertical Section most important values of the trajectory.</p>
                    <p>The app also has a “Warnings” section to show a message, describing a reason, in case the desired trajectory isn’t possible to perform.</p>
                </section>
            </main>
            <Footer/>
        </>
    );
}