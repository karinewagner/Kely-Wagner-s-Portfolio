import React from "react";
import "./style.css";

import Automonia from "../../assets/assets/automonia.png";
import Comunicacao from "../../assets/assets/comunicacao.png";
import Proatividade from "../../assets/assets/proatividade.png";
import Resiliencia from "../../assets/assets/resiliencia.png";
import Companherismo from "../../assets/assets/companherismo.png";

const benefitsData = [
    { icon: Automonia, text: "Lidar de forma mais assertiva com desafios e emoções;" },
    { icon: Comunicacao, text: "Lidar de forma mais assertiva com desafios e emoções;" },
    { icon: Proatividade, text: "Lidar de forma mais assertiva com desafios e emoções;" },
    { icon: Resiliencia, text: "Lidar de forma mais assertiva com desafios e emoções;" },
    { icon: Companherismo, text: "Lidar de forma mais assertiva com desafios e emoções;" },
];

const Benefits: React.FC = () => {
    return (
        <section className="section-benefits">
            <h3>Benefícios de fazer consulta de rotina</h3>
            <div className="benefits-container">
                {benefitsData.map((benefit, index) => (
                    <div className="benefits-box" key={index}>
                        <img src={benefit.icon} alt={`Icone de ${benefit.text.split(' ')[0].toLowerCase()}`} />
                        <p>{benefit.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Benefits;
