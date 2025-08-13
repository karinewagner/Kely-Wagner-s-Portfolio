import React from "react";

import Automonia from "../../assets/assets/automonia.png";
import Comunicacao from "../../assets/assets/comunicacao.png";
import Proatividade from "../../assets/assets/proatividade.png";
import Resiliencia from "../../assets/assets/resiliencia.png";
import Companherismo from "../../assets/assets/companherismo.png";

const benefitsData = [
    { icon: Automonia, text: "Lidar de forma mais assertiva com desafios e emoções;" },
    { icon: Comunicacao, text: "Melhorar habilidades de comunicação interpessoal;" },
    { icon: Proatividade, text: "Desenvolver maior proatividade na vida pessoal e profissional;" },
    { icon: Resiliencia, text: "Fortalecer a resiliência emocional;" },
    { icon: Companherismo, text: "Promover companheirismo e relações mais saudáveis;" },
];

const Benefits: React.FC = () => {
    return (
        <section className="text-left max-w-screen mx-auto px-2 py-4 lg:px-4 lg:py-6">
            <h2 className="titleSection">
                Benefícios
            </h2>
            <div className="flex flex-wrap justify-between gap-4 lg:gap-6">
                {benefitsData.map((benefit, index) => (
                    <div 
                        key={index}
                        className="flex gap-6 items-center bg-bege shadow-md rounded-2xl lg:rounded-3xl p-4 w-full "
                    >
                        <img 
                            src={benefit.icon} 
                            alt={`Ícone representando ${benefit.text}`} 
                            className="max-w-16 max-h-16 lg:max-w-28 lg:max-h-28"
                        />
                        <p className="text-marrom text-lg md:text-3xl w-full">{benefit.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;