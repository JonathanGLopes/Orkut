import React from "react";
import Logo from "../../objects/Logo";
import './header.css';

import imgPerfil from '../../img/icones/perfil.png';
import arrowDown from '../../img/icones/CaretDown.svg';


function Header() {
    return (
        <nav>
            <div className="container">    
                <div className="header-links">
                    <Logo />
                    <li className="header-links_li">Início</li>
                    <li className="header-links_li">Perfil</li>
                    <li className="header-links_li">Comunidades</li>
                    <li className="header-links_li">Jogos</li>
                </div>
                <div className="header-wrapper">
                    <div className="header-search">
                        <input type="search" placeholder="Pesquisar no Orkut" className="header-input" />
                    </div>
                    <div className="header-perfil">
                        <img src={imgPerfil} alt="" className="header-perfil_img"/>
                        <span className="header-perfil_name">Jonathan Lopes</span>
                        <img src={arrowDown} alt="" className="header-perfil_icon"/>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Header;