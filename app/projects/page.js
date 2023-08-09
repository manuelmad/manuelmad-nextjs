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
        path: '../../public/WorkSans-VariableFont_wght.ttf',
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
                        <h1 className={work_sans.className}>Mis Proyectos</h1>
                        <p><button>CONTÁCTAME</button></p>
                    </div>
                    <div className="introduction-right">
                        <Image src="/imgs/manuel-araujo-picture.png" width={305} height={377} alt="Manuel Araujo picture"/>
                    </div>
                </section>
                <section className="casing-design justified-left">
                    <h1>Diseño de Revestidores.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UClP-DTPBxA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Esta aplicación permite diseñar todas las características de los revestidores a ser utilizados en pozos petroleros para cubrir el hoyo abierto en cada fase.</p>
                    <p>Partiendo desde el número de sartas a utilizar y sus profundidades de asentamiento, incluido un ajuste basado en condiciones críticas; seguido de la selección de diámetros y conexiones de cada sarta, pasando por el diseño de su peso nominal y grado de acero y finalmente representando todo lo obtenido en un diagrama mecánico.</p>
                </section>
                <section className="planetageek-webpage justified-right">
                    <h1>Página Web para Programa de Televisión Venezolano.</h1>
                    <Image src="/imgs/planeta-geek-webpage.png" alt="imagen ejemplo de página web planeta geek" width={1893} height={892}/>
                    <p>Planeta Geek. Excelente programa venezolano basado en Videojuegos, series y películas geek, amimmación japonesa y los e-sports.</p>
                    <p>El programa tiene fuerte presencia en Instagram, contando con una buena cantidad de fanáticos y seguidores, los cuales son complacidos semana a semana por el staff del programa.</p>
                    <p>Esta página web se crea como un reconocimiento al esfuerzo de los responsables, a la vez que aumenta su presencia en internet y otorga mayor profesionalismo al proyecto.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg><a href="https://planetageek.netlify.app" target="_blank">ABRIR APLICACIÓN</a>
                    </p>
                </section>
                <section className="videojuegos justified-left">
                    <h1>Aplicación de Videojuegos.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eWY1OrTdAMY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Este proyecto fue construido como una Single-page application.</p>
                    <p>Se pone en práctica el consumo de una API, específicamente una basada en videojuegos, llamada RAWG (<a href="https://rawg.io/" target="_blank">rawg.io</a>).</p>
                    <p>Se añade la funcionalidad de realizar una búsqueda de juegos en la base de datos de dicha API e incluir cada juego en una de 3 categorías posibles: jugado (playED), jugando (playING) y por jugar (TOplay). También puede elminarse cualquier juego de cualquiera de las listas.</p>
                    <p>Además, haciendo clic sobre cualquier imagen de juego, se puede ir a una vista de detalles con información proveniente de la API.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg><a href="https://manuelmad.github.io/API-REST/" target="_blank">ABRIR APLICACIÓN</a>
                    </p>
                </section>
                <section className="dolce-vita justified-right">
                    <h1>Videojuego Planeta Geek.</h1>
                    <Image src="/imgs/videogame-pg-cover.png" width={1844} height={872} alt='Img planeta geek videogame'/>
                    <p>Basado en uno de mis hobbies, creé un videojuego corto, tipo RPG, con tan solo 3 niveles. Lo elaboré con la temática del programa de televisión que a menudo sigo.</p>
                    <p>Durante este proyecto pude poner en práctica ciertos procesos lógicos en JavaScript que en el desarrollo de ningún otro trabajo se me habían presentado, por ejemplo: establecer las superficies de contacto del personaje y el escenario; determinar la colisión entre personajes y objetos, así como las acciones que se derivan de éstas; renderizado simultáneo de varios elementos sobre el canvas, uso de las funciones setInterval() y setTimeout(), detección del evento de presionado de teclas y animaciones mediante “sprites”, entre muchos otros retos.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg><a href="https://planetageek-videogame.netlify.app/" target="_blank">ABRIR APLICACIÓN</a>
                    </p>
                </section>
                <section className="admin-condo justified-left">
                    <h1>Generador de Recibos para Administrador de Condominio.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/38yGQ5b1LVE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Con el objetivo de resolver la necesidad de un administrador de condominio de casas, he creado una aplicación con la capacidad de importar un archivo excel, que debe contener la base de datos del administrador organizada de una forma preestablecida.</p>
                    <p>En base a esta data, la aplicación puede generar un archivo .pdf con la información del propietario que se elija, siendo capaz así de generar recibos de pago de manera automática, en lugar de generarlos a mano uno por uno (más de 100 propietarios) como lo hacía el Administrador antes de contar con la aplicación.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#252C5A" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg><a href="https://yacambu.netlify.app/" target="_blank">ABRIR APLICACIÓN</a>
                    </p>
                </section>
                <section className="lenin-caraballo justified-right">
                    <h1>Aplicación web hecha con React para empresa de pastelería.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pYeE2LPqQBg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Esta aplicación fue hecha a la medida para los dueños de una empresa de pastelería.</p>
                    <p>Es utilizada por ellos diariamente para calcular y enviar los presupuestos de los pedidos que sus clientes solicitan.</p>
                    <p>La base de datos de los productos que la empresa ofrece es un array de objetos, la cual es manipulada según convenga para obtener los resultados requeridos.</p>
                </section>
                <section className="formation-pressures justified-left">
                    <h1>Aplicación web para calcular presiones de poro y fractura.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QVX95zT1mUo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Partiendo de registros sísmicos, podemos determinar las presiones de formación y fractura de las formaciones en el subsuelo antes de iniciar la perforación de un pozo.</p>
                    <p>Con los tiempos de tránsito obtenidos en dicho registro, podemos establecer valores de tiempo de tránsito normal y tiempo de tránsito observado para las profundidades de interés, así como la relación entre ambos.</p>
                    <p>Utilizando la correlación de Pennebacker, se puede obtener el valor de la  presión de cada formación.</p>
                    <p>Luego, utilizando la ecuación de Ben Eaton, la cual es función de la presión de formación ya calculada y de otros 2 parámetros que solo dependen de la profundidad (Relación de Poisson y Gradiente de Sobrecarga), podemos determinar la presión de fractura de cada formación.</p>
                </section>
                <section className="well-trajectory justified-right">
                    <h1>Aplicación web para graficar la trayectoria de pozos direccionales 2D tipo “S”.</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JLMksGhN3VU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Esta aplicación se encarga de tomar los 6 valores ingresados por el usuario y usarlos para calcular los parámetros necesarios para graficar a escala la trayectoria de un pozo direccional tipo “S”.</p>
                    <p>Además, muestra los valores de TVD, MD y Vertical Section en los puntos más importantes de la trayectoria.</p>
                    <p>También cuenta con una sección de "Warnings" para mostrar un mensaje de aviso en caso de que no sea posible graficar la trayectoria deseada, describiendo la razón.</p>
                </section>
            </main>
            <Footer/>
        </>
    );
}