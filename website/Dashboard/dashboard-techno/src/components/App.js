import React from "react"
// import '../assets/css/App.css';
import '../assets/css/home.css';
import ApiUsuario from "./ApiUsuario"
import Contenido from "./Contenido"
// import ApiProyecto from "./ApiProyecto"
import Switch from "./switch"


import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
    <Header />
    <Contenido />
    <Footer />
    {/* <Switch /> */}

    </React.Fragment>
  );
}

export default App;
