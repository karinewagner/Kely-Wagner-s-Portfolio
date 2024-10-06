import React from "react";

import "./style.css"

import IconInst from "../../assets/icons/icons-instagram.png";
import IconLink from "../../assets/icons/icons-linkedin.png";
import ProfilePicture from "../../assets/images/imagem-kely.jfif";

const Home: React.FC = () => {

    return (
        <section className="section-title">
            <div className="title-container" id="#sobremim">
                <h2>Olá, meu nome é Kely Wagner </h2>
                <ol>
                    <li>Psicóloga (CRP 18/07702)</li>
                    <li>Terapia Cognitivo-Comportamental</li>
                    <li>Experiência sólida em Desenvolvimento Pessoal, Profissional e de Carreiras</li>
                </ol>
                <ul>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/kely-wagner-16aa37125/">
                            <img src={IconLink} alt="Icone do linkedin"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/psicologakelywagner/">
                            <img src={IconInst} alt="Icone do instagram"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="img-profile">
                <img
                    src={ProfilePicture}
                    alt="Foto do perfil da Kely Wagner."
                />
            </div>
        </section>
    )
}

export default Home;