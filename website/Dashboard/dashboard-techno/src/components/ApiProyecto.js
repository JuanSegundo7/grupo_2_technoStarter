import React, {Component} from "react";
import Proyect from "./Proyect"

class ApiProyecto extends Component{
  constructor(props) {
        super(props);
        this.state = {
            proyects: []
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
          <React.Fragment>             
                {
                // this.state.proyectos === [] && <p>Cargando...</p>
                                }
                                {
                                  this.state.proyectos.map((proyect, i) => {

                                        return <Proyect
                                            key={proyect + i}
                                            id={proyect.id}
                                            name={proyect.name}
                                            fecha={proyect.fecha_final}
                                            descripcion={proyect.descripcion}
                                            detail={proyect.detail}

                                        />

                                  })
                                }
          </React.Fragment>
      ) 
    }
}

export default ApiProyecto;