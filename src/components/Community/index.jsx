import React from "react";

import Card from "../Card";
import './community.css';

import imgCar from '../../img/comunidade/car.png';
import imgCartoon from '../../img/comunidade/cartoon.png';
import imgCrazy from '../../img/comunidade/crazy.png';
import imgSweet from '../../img/comunidade/sweet.png';
import imgAnime from '../../img/comunidade/anime.png';
import imgReading from '../../img/comunidade/reading.png';
import imgEggs from '../../img/comunidade/eggs.png';
import imgBooks from '../../img/comunidade/books.png';
import imgCoffee from '../../img/comunidade/coffee.png';


export default function Community(){
    return(
        <Card className="community">
            <div className="community-number">
                <span className="community-amount">Comunidade (42)</span>
                <span className="community-all">Ver todos</span>
            </div>
            <section className="community-list">
                <div className="community-list_card">
                    <img src={imgCar} alt="" className="community-list_img" />
                    <span className="community-list_name">Carros</span>
                </div>
                <div className="community-list_card">
                    <img src={imgCartoon} alt="" className="community-list_img" />
                    <span className="community-list_name">Desenhos</span>
                </div>
                <div className="community-list_card">
                    <img src={imgCrazy} alt="" className="community-list_img" />
                    <span className="community-list_name">Crazy</span>
                </div>
                <div className="community-list_card">
                    <img src={imgSweet} alt="" className="community-list_img" />
                    <span className="community-list_name">Fofos</span>
                </div>
                <div className="community-list_card">
                    <img src={imgAnime} alt="" className="community-list_img" />
                    <span className="community-list_name">Animes</span>
                </div>
                <div className="community-list_card">
                    <img src={imgReading} alt="" className="community-list_img" />
                    <span className="community-list_name">Leitura</span>
                </div>
                <div className="community-list_card">
                    <img src={imgEggs} alt="" className="community-list_img" />
                    <span className="community-list_name">Meu ovo</span>
                </div>
                <div className="community-list_card">
                    <img src={imgBooks} alt="" className="community-list_img" />
                    <span className="community-list_name">My books</span>
                </div>
                <div className="community-list_card">
                    <img src={imgCoffee} alt="" className="community-list_img" />
                    <span className="community-list_name">Cafeee</span>
                </div>
            </section>
        </Card>

    )
}