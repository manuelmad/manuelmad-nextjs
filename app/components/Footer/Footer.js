import Image from 'next/image';
import Link from 'next/link';
import './footer.css';

export default function Header() {
    return (
        <footer id="contacto">
            <section className="contact">
                <div>
                    <h1>Contáctame</h1>
                    <p>Si deseas ponerte en contacto conmigo para conocer un poco más acerca de mis proyectos, que colabore en alguno de los tuyos o para ofertas de trabajo, aquí te dejo la información que necesitas.</p>
                    <p>
                        <button>
                            <Link href="/projects">MY PROJECTS</Link>
                        </button>
                    </p>
                </div>
            </section>
            <section className="contact-info">
                <div>
                    <h2>LinkedIn</h2>
                    <p><a href="https://www.linkedin.com/in/manuel-araujo-beltran-994564153/" target="_blank">Manuel Araujo</a></p>
                    <h2>YouTube</h2>
                    <p><a href="https://www.youtube.com/channel/UCi6wdvohTO_5MuaIteiRm_A" target="_blank">@manuelaraujo81</a></p>
                    <h2>GitHub</h2>
                    <p><a href="https://github.com/manuelmad" target="_blank">manuelmad</a></p>
                </div>
            </section>
            <section className="personal-logo">
                <Image
                    src="/imgs/logo-footer.png"
                    alt="logo"
                    width={241}
                    height={241}
                /> 
            </section>
        </footer>
    );
}