import React from "react";

function Proyect(props){
    return(
        <table>
            <tbody>
                <tr>
                    <td>{props.id}</td> 
                    <td>{props.descripcion}</td>
                    <td>{props.fecha_final}</td>
                    <td>{props.imagenes}</td>
                    <td>{props.detail}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Proyect;