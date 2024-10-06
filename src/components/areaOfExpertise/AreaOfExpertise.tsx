import React from "react";

import "./style.css"

import Automonia from "../../assets/assets/automonia.png";
import Comunicacao from "../../assets/assets/comunicacao.png";
import Proatividade from "../../assets/assets/proatividade.png";
import Resiliencia from "../../assets/assets/resiliencia.png";
import Companherismo from "../../assets/assets/companherismo.png";

const AreaOfExpertise: React.FC = () => {

    return (
        <section className="section-area-of-expertise">
            <h3 >Atencimentos presencial e/ou online</h3>
            <div className="area-of-expertise-container">
                <div className="area-of-expertise-box">
                    <img src={Automonia} alt="Icone de automonia"/>
                    <p>Autonomia</p>
                </div>

                <div className="area-of-expertise-box">
                    <img src={Comunicacao} alt="Icone de comunicação"/>
                    <p>Comunicação</p>
                </div>

                <div className="area-of-expertise-box">
                    <img src={Proatividade} alt="Icone de proatividade"/>
                    <p>Proatividade</p>
                </div>

                <div className="area-of-expertise-box">
                    <img src={Resiliencia} alt="Icone de resiliência"/>
                    <p>Resiliência</p>
                </div>

                <div className="area-of-expertise-box">
                    <img src={Companherismo} alt="Icone de companherismo"/>
                    <p>Companherismo</p>
                </div>
            </div>
        </section>
    )
}

export default AreaOfExpertise;