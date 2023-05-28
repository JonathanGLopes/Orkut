import React from "react";

import './friends.css';
import imgFernando from '../../img/amigos/fernando.png';
import imgAna from '../../img/amigos/ana.png';
import imgCarlos from '../../img/amigos/carlos.png';
import imgVitor from '../../img/amigos/vitor.png';
import imgMatheus from '../../img/amigos/matheus.png';
import imgRamos from '../../img/amigos/ramos.png';
import imgEiji from '../../img/amigos/eiji.png';
import imgJulia from '../../img/amigos/julia.png';
import imgCarol from '../../img/amigos/carol.png';

function Friends(){
    return(
        <div className="friends">
            <div className="friends-number">
                <span className="friends-amount">Amigos (248)</span>
                <span className="friends-all">Ver todos</span>
            </div>
            <section className="friends-list">
                <div className="friends-list_card">
                    <img src={imgFernando} alt="" className="friends-list_img" />
                    <span className="friends-list_name">Fernando</span>
                </div>
                <div className="friends-list_card">
                    <img src={imgAna} alt="" className="friends-list_img" />
                    <span className="friends-list_name">Ana</span>
                </div>
                <div className="friends-list_card">
                    <img src={imgCarlos} alt="" className="friends-list_img" />
                    <span className="friends-list_name">Carlos</span>
                </div>
                <div className="friends-list_card">
                    <img src={imgVitor} alt="" className="friends-list_img" />
                    <span className="friends-list_name">Vitor</span>
                </div>
                <div className="friends-list_card">
                    <img src={imgMatheus} alt="" className="friends-list_img" />
                    <span className="friends-list_name">Matheus</span>
                </div>
                <div className="friends-list_card">
                    <img src={imgRamos} alt="" className="friends-list_img" />
                    <span className="friends-list_name">Ramos</span>
                </div>
                <div className="friends-list_card">
                    <img src={imgEiji} alt="" className="friends-list_img" />
                    <span className="friends-list_name">Eiji</span>
                </div>
                <div className="friends-list_card">
                    <img src={imgJulia} alt="" className="friends-list_img" />
                    <span className="friends-list_name">Julia</span>
                </div>
                <div className="friends-list_card">
                    <img src={imgCarol} alt="" className="friends-list_img" />
                    <span className="friends-list_name">Carol</span>
                </div>
            </section>
        </div>

    )
}

export default Friends;