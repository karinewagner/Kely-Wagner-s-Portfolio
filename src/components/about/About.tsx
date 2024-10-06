import React from "react";

import "./style.css"

const About: React.FC = () => {

    return (
        <section className="section-about">
            <div className="about-container">
                <h3>Sobre mim</h3>
                <p>
                    Atualmente atuando na área de desenvolvimento web com NodeJS e React.Atuei por mais de 10 anos no
                    setor financeiro, com especialização em finanças, auditoria e controladoria.Me preparando todos os
                    dias para ser
                    uma grande desenvolvedora Full Stack.
                </p>
            </div>
            <div className="about-container">
                <h3>Minha Abordagem</h3>
                <p>
                    <strong>Terapia Cognitivo Comportamental:</strong> é uma abordagem terapêutica baseada na teoria
                    de que nossos pensamentos, emoções e comportamentos estão interligados e podem influenciar um ao
                    outro. Tem como objetivo ajudar na identificação e mudança de padrões de pensamentos e
                    comportamentos negativos que estão causando problemas e dificuldades. Desenvolve a harmonia e
                    funcionalidade dos pensamentos, emoções e comportamentos.
                </p>
                <p>
                    <strong>Terapia de Aceitação e Compromisso:</strong> desenvolve maior flexibilidade psicológica
                    para lidar melhor com pensamentos e emoções difíceis, ajuda na identificação e definição de
                    valores e objetivos pessoais para ter uma vida mais significativa, satisfatória e alinhada ao
                    que é importante para si. Permitindo-lhes ser mais presentes e conscientes em suas vidas.
                </p>
            </div>
        </section>
    )
}

export default About;
