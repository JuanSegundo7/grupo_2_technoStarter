import React, {Component} from "react";
import Proyect from "./Proyect"

class ApiProyecto extends Component{
  constructor(props) {
        super(props);
        this.state = {
            proyectos: []
        }
    };

    async componentDidMount() {

        try {


            let proyectos = await fetch("http://localhost:5000/proyectos").then(response => response.json())

            // console.log("proyectos", proyectos);

            this.setState({
                proyectos: proyectos.products,

            });
          
          console.log("acaa",this.state.proyectos);
        } catch (e) { console.log(e) };

    }
    
    render(){
      return(
            <main>
              <h2 id="h2Proyecto">Proyectos</h2>
                <article className="flex-proyectos-react">      
                {this.state.proyectos === [] && <p>Cargando...</p>}{
                  this.state.proyectos.map((proyect, i) => {
                                            return <Proyect
                                            key={proyect + i}
                                            id={proyect.id}
                                            imagenes={proyect.imagenes[0].url_imagen}
                                            nombre={proyect.nombre}
                                            fecha_final={proyect.fecha_final}
                                            descripcion={proyect.descripcion}
                                            />
                  })
                }
                </article>      
            </main>
      ) 
    }
}

export default ApiProyecto;