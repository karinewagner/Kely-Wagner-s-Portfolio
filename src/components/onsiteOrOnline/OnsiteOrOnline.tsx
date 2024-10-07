import React from "react";
import "./style.css";

import Automonia from "../../assets/assets/automonia.png";
import Comunicacao from "../../assets/assets/comunicacao.png";
import Proatividade from "../../assets/assets/proatividade.png";
import Resiliencia from "../../assets/assets/resiliencia.png";
import Companherismo from "../../assets/assets/companherismo.png";

const OnsiteOrOnline: React.FC = () => {
    return (
        <section className="section-onsite-or-online">
            <h3>Atendimentos presencial e/ou online</h3>
            <div className="onsite-or-online-container">
                <div className="onsite-or-online-box">
                    <img src={Automonia} alt="Ícone de autonomia" />
                    <p>Abordagem com Resultados Científicos</p>
                </div>
                <div className="onsite-or-online-box">
                    <img src={Comunicacao} alt="Ícone de comunicação" />
                    <p>Acompanhamento Profissional</p>
                </div>
                <div className="onsite-or-online-box">
                    <img src={Proatividade} alt="Ícone de proatividade" />
                    <p>50 minutos</p>
                </div>
                <div className="onsite-or-online-box">
                    <img src={Resiliencia} alt="Ícone de resiliência" />
                    <p>Ferramentas de Apoio</p>
                </div>
                <div className="onsite-or-online-box">
                    <img src={Companherismo} alt="Ícone de companheirismo" />
                    <p>Individual e Particular</p>
                </div>
            </div>
        </section>
    );
};

export default OnsiteOrOnline;
