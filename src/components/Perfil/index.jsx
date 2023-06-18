import React from "react";
import './perfil.css';

import imgPerfil from '../../img/icones/imgperfil.jpg';
import Card from "../Card";

function Perfil(){
    return(
        <Card className="perfil-card">
            <div className="border"></div>
            <img src={imgPerfil} alt="" className="perfil-img" />
            <span className="perfil-name">Jonathan Lopes</span>
            <span className="perfil-status">Solteiro, Brasil</span>
        </Card>
    )
}

export default Perfil;