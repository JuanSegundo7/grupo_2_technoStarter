import React from "react";
import Contenido from "./Contenido";
// import Categorias from "./Categorias";
import Usuario from "./ApiUsuario";
import {Route,Switch} from "react-router-dom";

const Switch1 = function () {
    return (
    <Switch>
        <Route exact path="/" component={Contenido} />
        <Route path="/users" component={Usuario} />
        <Route path="/proyectos" component={Usuario} />
        <Route path="/categorias" component={Categorias} />

    </Switch>);
}

export default Switch1;