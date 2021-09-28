import React, {Component} from "react";
import User from "./User"

class ApiUsuario extends Component{
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
          
          // console.log("acaa",this.state.users[0].id);
        } catch (e) { console.log(e) };

    }
    
    render(){
      return(
          <React.Fragment>
              {
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
          </React.Fragment>
      ) 
    }
}

export default ApiUsuario;