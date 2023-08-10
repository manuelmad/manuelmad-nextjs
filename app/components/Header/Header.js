import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';


export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.header_logo_container}>
                <Link className={styles.logo_link} href="/">
                    <Image
                        className={styles.logo_img}
                        src="/imgs/logo.png"
                        alt="logo"
                        width={200}
                        height={62}
                    />
                </Link>
            </div>
            <nav className={styles.header_nav}>
                <div className={styles.container__menu_principal}>
                    <ul id="menu-principal" className={styles.menu_principal}>
                        <li className={styles.menu_principal_li}>
                            <Link className={styles.menu_principal_a} href="/projects">{props.projects}</Link>
                            </li>
                        <li className={styles.menu_principal_li}>
                            <Link className={styles.menu_principal_a} href="/#personal-info">{props.aboutme}</Link>
                            </li>
                        <li className={styles.menu_principal_li}>
                            <Link className={styles.menu_principal_a} href="/#curriculum">{props.studies}</Link>
                            </li>
                        <li className={styles.menu_principal_li}>
                            <Link className={styles.menu_principal_a} href="/#contacto">{props.contact}</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.container__icono_menu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className={styles.bi_list} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <ul id="menu-desplegable" className={styles.menu_desplegable}>
                        <li className={styles.menu_desplegable_li}>
                            <Link className={styles.menu_desplegable_a} href="/projects">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi, styles.bi-folder2-open "viewBox="0 0 16 16">
                                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                                </svg> {props.projects}
                            </Link>
                        </li>
                        <li className={styles.menu_desplegable_li}>
                            <Link className={styles.menu_desplegable_a}  href="/#personal-info">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg> {props.aboutme}
                            </Link>
                        </li>
                        <li className={styles.menu_desplegable_li}>
                            <Link className={styles.menu_desplegable_a}  href="/#curriculum">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16">
                                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                                </svg> {props.studies}
                            </Link>
                        </li>
                        <li className={styles.menu_desplegable_li}>
                            <Link className={styles.menu_desplegable_a} href="/#contacto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                </svg> {props.contact}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}