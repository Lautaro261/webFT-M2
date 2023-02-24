import React from "react";
import { alerts } from "./Bienvenido";

class Botones extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <button onClick={(props) => alert(alerts.m1)} >Módulo 1</button>
                <button onClick={(props) => alert(alerts.m2)} >Módulo 2</button>
            </div>
        )
    }
}

export default Botones;