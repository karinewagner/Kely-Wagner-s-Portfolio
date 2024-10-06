import React from "react";
import "./style.css";

import Automonia from "../../assets/assets/automonia.png";
import Comunicacao from "../../assets/assets/comunicacao.png";
import Proatividade from "../../assets/assets/proatividade.png";
import Resiliencia from "../../assets/assets/resiliencia.png";
import Companherismo from "../../assets/assets/companherismo.png";

const AreaOfExpertise: React.FC = () => {
    const areas = [
        { img: Automonia, label: "Autonomia", alt: "Ícone de autonomia" },
        { img: Comunicacao, label: "Comunicação", alt: "Ícone de comunicação" },
        { img: Proatividade, label: "Proatividade", alt: "Ícone de proatividade" },
        { img: Resiliencia, label: "Resiliência", alt: "Ícone de resiliência" },
        { img: Companherismo, label: "Companherismo", alt: "Ícone de companherismo" },
    ];

    return (
        <section className="section-area-of-expertise">
            <h3>Atendimentos presencial e/ou online</h3>
            <div className="area-of-expertise-container">
                {areas.map((area, index) => (
                    <div className="area-of-expertise-box" key={index}>
                        <img src={area.img} alt={area.alt} />
                        <p>{area.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AreaOfExpertise;
