import React from "react";
import IconInst from "../../assets/icons/icons-instagram.png";
import IconLink from "../../assets/icons/icons-linkedin.png";
import ProfilePicture from "../../assets/images/imagem-kely.jfif";
import { homeContent } from "../../content/homeContent";

const Home: React.FC = () => {
    return (
        <section className="relative flex flex-col justify-between mx-auto max-w-screen py-6 lg:py-8 bg-off-white overflow-hidden">

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0 w-72 h-72 lg:w-86 lg:h-86">
                <img
                    src={ProfilePicture}
                    alt="Foto de perfil de Kely Wagner"
                    className="w-full h-full object-cover rounded-full border-4 border-verde-salvia shadow-md transition-opacity duration-300 opacity-50 md:opacity-100"
                    loading="lazy"
                />
            </div>
            
            <article className="relative z-10 flex flex-col gap-4 lg:gap-6 items-start text-start md:text-left">
                <h2 className="font-bold text-5xl lg:text-7xl text-marrom">
                    {homeContent.title}
                </h2>
                <div className="flex flex-col lg:gap-3 ml-4 list-decimal space-y-2 text-marrom">
                    {homeContent.description.map((item, index) => (
                        <li key={index} className="text-lg lg:text-2xl">
                            {item}
                        </li>
                    ))}
                </div>
                <ul className="flex gap-1 justify-start md:justify-start w-full">
                    <li>
                        <a href="https://www.linkedin.com/in/kely-wagner-16aa37125/" target="_blank" rel="noopener noreferrer">
                            <img src={IconLink} alt="Ícone do LinkedIn" className="w-10 lg:w-20 h-10 lg:h-20 hover:scale-120 transition-transform" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/psicologakelywagner/" target="_blank" rel="noopener noreferrer">
                            <img src={IconInst} alt="Ícone do Instagram" className="w-10 lg:w-20 h-10 lg:h-20 hover:scale-120 transition-transform" />
                        </a>
                    </li>
                </ul>
            </article>
        </section>
    );
};

export default Home;
