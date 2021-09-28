import React, {Component} from "react";
import User from "./User"


class ApiUsuarioTodos extends Component{
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
            <main>
              <h2 id="h2Proyecto">Usuarios</h2>
                <article className="flex-proyectos-react">{
                  this.state.users === [] && <p>Cargando...</p>
                                  }
                                  {
                                    this.state.users.map((user, i) => {

                                          return <User
                                              avatar={user.avatar}
                                              key={user + i}
                                              id={user.id}
                                              firstname={user.name}
                                              email={user.email}
                                              detail={user.detail}

                                          />

                                    })
                                  }
                </article>
            </main>
          </React.Fragment>
      ) 
    }
}

export default ApiUsuarioTodos;

