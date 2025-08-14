import React from "react";

import Automonia from "../../assets/assets/automonia.png";
import Comunicacao from "../../assets/assets/comunicacao.png";
import Proatividade from "../../assets/assets/proatividade.png";
import Resiliencia from "../../assets/assets/resiliencia.png";
import Companherismo from "../../assets/assets/companherismo.png";

const OnsiteOrOnline: React.FC = () => {
    const data = [
        { icon: Automonia, text: "Abordagem com Resultados Científicos", alt: "Ícone de autonomia" },
        { icon: Comunicacao, text: "Acompanhamento Profissional", alt: "Ícone de comunicação" },
        { icon: Proatividade, text: "50 minutos", alt: "Ícone de proatividade" },
        { icon: Resiliencia, text: "Ferramentas de Apoio", alt: "Ícone de resiliência" },
        { icon: Companherismo, text: "Individual e Particular", alt: "Ícone de companheirismo" },
        { icon: Companherismo, text: "Presencial ou Online", alt: "Ícone de companheirismo" },
    ];

    return (
        <section className="text-left max-w-screen mx-auto px-2 py-4 lg:px-4 lg:py-6 bg-bege rounded-xl lg:rounded-3xl shadow-md">
            <h2 className="titleSection text-center">
                Atendimentos
            </h2>
            <div className="flex flex-col gap-4 mt-2">
                {data.map((item, index) => (
                    <div 
                        key={index}
                        className="flex gap-4 items-center w-full border-t border-terracota p-4"
                    >
                        <img 
                            src={item.icon} 
                            alt={item.alt}
                            className="max-w-16 max-h-16 lg:max-w-28 lg:max-h-28"
                        />
                        <p className="text-marrom text-lg md:text-3xl w-full">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OnsiteOrOnline;
