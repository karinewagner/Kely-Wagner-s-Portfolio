import React from "react";

import "./style.css"

import Automonia from "../../assets/assets/automonia.png";
import Comunicacao from "../../assets/assets/comunicacao.png";
import Proatividade from "../../assets/assets/proatividade.png";
import Resiliencia from "../../assets/assets/resiliencia.png";
import Companherismo from "../../assets/assets/companherismo.png";

const OnsiteOrOnline: React.FC = () => {

    return (
        <section className="section-onsite-or-online">
                <h3 >Atencimentos presencial e/ou online</h3>
                <div className="onsite-or-online-container">
                    <div className="onsite-or-online-box">
                        <img src={Automonia} alt="Icone de automonia"/>
                        <p>Abordagem com Resultados Científicos</p>
                    </div>

                    <div className="onsite-or-online-box">
                        <img src={Comunicacao} alt="Icone de comunicação"/>
                        <p>Acompanhamento Profissional</p>
                    </div>

                    <div className="onsite-or-online-box">
                        <img src={Proatividade} alt="Icone de proatividade"/>
                        <p>50 minutos</p>
                    </div>

                    <div className="onsite-or-online-box">
                        <img src={Resiliencia}  alt="Icone de resiliência"/>
                        <p>Ferramentas de Apoio</p>
                    </div>

                    <div className="onsite-or-online-box">
                        <img src={Companherismo} alt="Icone de companherismo"/>
                        <p>Individual e Particular</p>
                    </div>
                </div>
            </section>
    )
}

export default OnsiteOrOnline;