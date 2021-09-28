import React from "react";

function User(props){
    return(
        <table>
            <tbody>
                <tr>
                    <td>{props.avatar}</td> 
                    <td>{props.id}</td> 
                    <td>{props.firstname}</td>
                    <td>{props.email}</td>
                    <td>{props.detail}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default User;