import React from "react";
import './perfil.css';

import imgPerfil from '../../img/icones/perfil.png';

function Perfil(){
    return(
        <section className="perfil-card">
            <div className="border"></div>
            <img src={imgPerfil} alt="" className="perfil-img" />
            <span className="perfil-name">Jonathan Lopes</span>
            <span className="perfil-status">Solteiro, Brasil</span>
        </section>
    )
}

export default Perfil;