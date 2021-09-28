import React from 'react';
import '../assets/css/footer.css';
import Logo from "../assets/img/TechnoStarter1.png"


function Footer(){
    return(
    <React.Fragment>
        <footer>
            <section>
                <figure className="logo-footer">
                    <a href="/"><img src={Logo} alt="logo"/></a>
                </figure>
            </section>
            <section className="section-p-footer">
                <p>Av. Carlos Sinsa 4587 Piso 2 CP 5496 Parque Patricios, CABA</p>
            </section>
            <section className="categorias-footer">
                <article className="ayuda">
                    <ul>
                        <li>Ayuda</li>
                    </ul>
                </article>
                <article>
                    <ul>
                        <li>Privacidad</li>
                    </ul>
                </article>
                <article>
                    <ul>
                        <li>Condiciones</li>
                    </ul>
                </article>
            </section>  
        </footer>
    </React.Fragment>
    )
}

export default Footer;