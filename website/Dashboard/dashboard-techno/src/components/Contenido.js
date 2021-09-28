import React from "react";
import ApiUsuario from "./ApiUsuario"
import Logo from "../assets/img/TechnoStarter1.png"
import {Link,Route,Switch} from "react-router-dom";


function Contenido(){
    return(
        <body>
            <main>
                <section>
                    <article id="flex-dashboard">
                        <img src={Logo} alt="logo" id="desktop-techno" />
                        <h1>DASHBOARD</h1>
                    </article>
                        <h3 id="bienvenida">Bienvenidos al Dashboard de TechnoStarter</h3>
                    <article>
                    <article id="flex-links">
                        <Link to="/users">Usuarios</Link>
                        <Link to="/proyectos">Proyectos</Link>
                        <Link to="/categorias">categorias</Link>
                    </article>
                    </article>
                    <article className="flex-articles">
                        <ApiUsuario />
                    </article>
                    <article>
                    </article>
                </section>
            </main>
        </body>
    )
}

export default Contenido;