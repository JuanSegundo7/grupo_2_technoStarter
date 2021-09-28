import React from "react";

function Proyect(props){
    return(
            <table>
                <tbody>
                    <tr className="flex-tr">
                        <td id="idProyect">{props.id}</td> 
                        <td>{props.nombre}</td>
                    </tr>
                    <tr className="textoProyect">Descripción<td>{props.descripcion}</td></tr>
                    <tr className="fechaProyect"><td>Caduce el {props.fecha_final}</td></tr>
                </tbody>
            </table>
    )
}

{/* <tr><img src="http://localhost:5000/uploads/products/"{props.imagenes}/></tr> */}

export default Proyect;