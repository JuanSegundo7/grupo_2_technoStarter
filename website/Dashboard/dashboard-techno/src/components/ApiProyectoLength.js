import React, {Component}  from 'react';
import User from "./User"

class ApiProyectoLength extends Component{
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
            <React.Fragment>
                <article className="cantidad">
                    <h3>Cantidad de Proyectos</h3>
                    {this.state.proyectos.length}
                </article>
            </React.Fragment>
        ) 
    }
}

export default ApiProyectoLength;