import React from "react";

import Card from "../Card";
import './sobre.css';

import iconStar from '../../img/icones/Star.svg';
import iconSmile from '../../img/icones/Smiley.svg';
import iconThumb from '../../img/icones/ThumbsUp.svg';
import iconHeart from '../../img/icones/Heart.svg';

export default function Description(){
    return(
        <Card>
            <h2 className="description-name">Boa tarde, Jonathan Lopes</h2>
            <p className="description-text">Programar sem café é igual um poeta sem poesia.</p>
            <div className="description-status">
                <div className="description-status_wrap">
                    <span className="description-status_name">Fãs</span>
                    <div className="description-status_icons">
                        <img src={iconStar} alt="" className="description-status_icon" />
                        <span className="description-status_count">85</span>
                    </div>
                </div>
                <div className="description-status_wrap">
                    <span className="description-status_name">Confiável</span>
                    <div className="description-status_icons">
                        <img src={iconSmile} alt="" className="description-status_icon" />
                        <img src={iconSmile} alt="" className="description-status_icon" />
                    </div>
                </div>
                <div className="description-status_wrap">
                    <span className="description-status_name">Legal</span>
                    <div className="description-status_icons">
                        <img src={iconThumb} alt="" className="description-status_icon" />
                        <img src={iconThumb} alt="" className="description-status_icon" />
                        <img src={iconThumb} alt="" className="description-status_icon" />
                    </div>
                </div>
                <div className="description-status_wrap">
                    <span className="description-status_name">Sexy</span>
                    <div className="description-status_icons">
                        <img src={iconHeart} alt="" className="description-status_icon" />
                        <img src={iconHeart} alt="" className="description-status_icon" />
                    </div>
                </div>
            </div>
            <div className="description-info">
                <span className="description-info_status">Relacionamento: <span className="description-info_status_name">Solteiro</span></span>
                <span className="description-info_status">Aniversário: <span className="description-info_status_name">28 Novembro</span></span>
                <span className="description-info_status">Idade: <span className="description-info_status_name">27</span></span>
                <span className="description-info_status">Interesses no Orkut: <span className="description-info_status_name">Solteiro</span></span>
                <span className="description-info_status">Quem sou eu: <span className="description-info_status_name">Programador</span></span>
                <span className="description-info_status">Filhos: <span className="description-info_status_name">Não</span></span>
                <span className="description-info_status">Sexo: <span className="description-info_status_name">Masculino</span></span>
                <span className="description-info_status">Fumo: <span className="description-info_status_name">Não</span></span>
                <span className="description-info_status">Bebo: <span className="description-info_status_name">Depende do dia</span></span>
                <span className="description-info_status">Moro: <span className="description-info_status_name">São Paulo</span></span>
                <span className="description-info_status">País: <span className="description-info_status_name">Brasil</span></span>
                <span className="description-info_status">Cidade natal: <span className="description-info_status_name">São Paulo</span></span>
                <div className="description-info_display">
                    <span className="description-info_status">Músicas: <span className="description-info_status_display">Rock</span><span className="description-info_status_display">Indie</span><span className="description-info_status_display">MPB</span></span>
                    <span className="description-seeall">Ver todos</span>
                </div>
                <div className="description-info_display">
                    <span className="description-info_status">Filmes: <span className="description-info_status_display">Her</span><span className="description-info_status_display">Van Hellsing</span><span className="description-info_status_display">Spiderman</span></span>
                    <span className="description-seeall">Ver todos</span>
                </div>
            </div>
        </Card>
    )
}