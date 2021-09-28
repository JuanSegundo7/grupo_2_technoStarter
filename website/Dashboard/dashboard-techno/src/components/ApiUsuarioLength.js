import React, {Component}  from 'react';
import Proyect from "./Proyect"

class ApiUsuarioLength extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
  };

    async componentDidMount() {
        try {
            let pedidoUsers = await fetch("http://localhost:5000/users").then(response => response.json())
            // console.log("pedidoUsers", pedidoUsers);
            this.setState({
                users: pedidoUsers.users,
            });
          
          console.log("acaa",this.state.users);
        } catch (e) { console.log(e) };

    }
    
    render(){
        return(
            <React.Fragment>
                <article className="cantidad">
                    <h3>Cantidad de Usuarios</h3>
                    {this.state.users.length}
                </article>
            </React.Fragment>
        ) 
    }
}

export default ApiUsuarioLength;