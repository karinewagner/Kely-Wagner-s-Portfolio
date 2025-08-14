import React from "react";

import Linkedin from "../../assets/icons/linkedin.svg";
import Instagram from "../../assets/icons/instagram.svg";

import ProfilePicture from "../../assets/images/imagem-kely.jfif";
import { homeContent } from "../../content/homeContent";

const Home: React.FC = () => {
    return (
        <section className="relative lg:static lg:flex lg:flex-row-reverse lg:items-center lg:gap-10 
        flex flex-col justify-between mx-auto max-w-screen px-2 py-4 lg:px-4 lg:py-6 bg-off-white overflow-hidden">
            
            <div className="absolute lg:static right-0 top-1/2 lg:top-auto transform -translate-y-1/2 lg:translate-y-0 
            z-0 lg:z-10 w-72 h-72 lg:w-96 lg:h-96 flex-shrink-0 imgProfile">
                <img
                    src={ProfilePicture}
                    alt="Foto de perfil de Kely Wagner"
                    className="w-full h-full object-cover rounded-full border-4 border-verde-salvia shadow-md transition-opacity duration-300 "
                    loading="lazy"
                />
            </div>

            <article className="relative z-10 flex flex-col gap-4 lg:gap-6 items-start text-start md:text-left">
                <h2 className="font-bold text-5xl md:text-7xl lg:text-9xl text-terracota font-libertinus">
                    {homeContent.title}
                </h2>
                <div className="flex flex-col gap-1 lg:gap-3 ml-4 lg:ml-8 list-decimal space-y-2 max-w-md md:max-w-2xl lg:max-w-4xl">
                    {homeContent.description.map((item, index) => (
                        <li key={index} className="font-medium text-xl md:text-3xl lg:text-5xl text-marrom font-libertinus">
                            {item}
                        </li>
                    ))}
                </div>
                <ul className="flex gap-1 justify-start w-full mt-2">
                    <li>
                        <a href="https://www.linkedin.com/in/kely-wagner-16aa37125/" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="Ícone do LinkedIn" className="w-10 lg:w-20 h-10 lg:h-20 hover:scale-110 transition-transform" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/psicologakelywagner/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Ícone do Instagram" className="w-10 lg:w-20 h-10 lg:h-20 hover:scale-110 transition-transform" />
                        </a>
                    </li>
                </ul>
            </article>
        </section>
    );
};

export default Home;
