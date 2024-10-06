import React from "react";

import "./style.css"

import Automonia from "../../assets/assets/automonia.png";
import Comunicacao from "../../assets/assets/comunicacao.png";
import Proatividade from "../../assets/assets/proatividade.png";
import Resiliencia from "../../assets/assets/resiliencia.png";
import Companherismo from "../../assets/assets/companherismo.png";

const Benefits: React.FC = () => {

    return (
        <section className="section-benefits">
            <h3 >Benefícios de fazer consulta de rotina</h3>
            <div className="benefits-container">
                <div className="benefits-box">
                    <img src={Automonia} alt="Icone de automonia"/>
                    <p>Lidar de forma mais assertiva com desafios e emoções;</p>
                </div>

                <div className="benefits-box">
                    <img src={Comunicacao} alt="Icone de comunicação"/>
                    <p>Lidar de forma mais assertiva com desafios e emoções;</p>
                </div>

                <div className="benefits-box">
                    <img src={Proatividade} alt="Icone de proatividade"/>
                    <p>Lidar de forma mais assertiva com desafios e emoções;</p>
                </div>

                <div className="benefits-box">
                    <img src={Resiliencia} alt="Icone de resiliência"/>
                    <p>Lidar de forma mais assertiva com desafios e emoções;</p>
                </div>

                <div className="benefits-box">
                    <img src={Companherismo} alt="Icone de companherismo"/>
                    <p>Lidar de forma mais assertiva com desafios e emoções;</p>
                </div>
            </div>
        </section>
    )
}

export default Benefits;