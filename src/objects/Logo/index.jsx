import React from "react";
import './styles.css';
import logoImg from '../../img/icones/logo-orkut.svg';

function Logo(){
    return (
        <>
            <img src={logoImg} alt="" className="logo-img"/>
        </>
    )
}

export default Logo;