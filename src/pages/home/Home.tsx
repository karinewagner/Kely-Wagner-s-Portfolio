import React from "react";
import IconInst from "../../assets/icons/icons-instagram.png";
import IconLink from "../../assets/icons/icons-linkedin.png";
import ProfilePicture from "../../assets/images/imagem-kely.jfif";
import { homeContent } from "../../content/homeContent";

const Home: React.FC = () => {
    return (
        <section className="relative flex flex-col md:flex-row justify-center items-center md:gap-4 mx-auto max-w-screen-lg py-6 bg-off-white overflow-hidden">

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 md:static md:flex-none z-0">
                <img
                    src={ProfilePicture}
                    alt="Foto de perfil de Kely Wagner"
                    className="w-72 h-72 md:w-64 md:h-64 rounded-full object-cover border-4 border-verde-salvia shadow-md opacity-50 md:opacity-100"
                    loading="lazy"
                />
            </div>
            
            <article className="relative z-10 flex flex-col gap-4 items-start text-start md:text-left">
                <h2 className="font-bold text-5xl md:text-4xl text-marrom">
                    {homeContent.title}
                </h2>
                <ol className="ml-4 list-decimal space-y-2 text-marrom">
                    {homeContent.description.map((item, index) => (
                        <li key={index} className="text-lg">
                            {item}
                        </li>
                    ))}
                </ol>
                <ul className="flex gap-1 justify-start md:justify-start w-full">
                    <li>
                        <a href="https://www.linkedin.com/in/kely-wagner-16aa37125/" target="_blank" rel="noopener noreferrer">
                            <img src={IconLink} alt="Ícone do LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/psicologakelywagner/" target="_blank" rel="noopener noreferrer">
                            <img src={IconInst} alt="Ícone do Instagram" className="w-10 h-10 hover:scale-110 transition-transform" />
                        </a>
                    </li>
                </ul>
            </article>
        </section>
    );
};

export default Home;
