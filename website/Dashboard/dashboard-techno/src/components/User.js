import React from "react";
import '../assets/css/home.css';

function User(props){
    return(
        <table>
            <tbody>
                <tr id="flex-user-dash">
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