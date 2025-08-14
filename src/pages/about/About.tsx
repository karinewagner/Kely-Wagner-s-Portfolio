import React from "react";

import ProfilePicture from "../../assets/images/imagem-kely.jfif";

import { aboutContent } from "../../content/aboutContent";
import { myApproachContent } from "../../content/myApproachContent";

const About: React.FC = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
                <path fill="#F3E5D8" fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,117.3C672,117,768,75,864,64C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <section className="bg-bege flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-9 px-2 md:px-8 py-4 md:py-0 
            rounded-lg shadow-md md:shadow-none">
                <div className="m-auto md:flex-1">
                    {aboutContent.sections.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-2 md:gap-3">
                            <h2 className="text-terracota font-bold text-3xl md:text-5xl lg:text-7xl xl:text-8xl">{section.title}</h2>
                            
                            {section.text && (
                                <p className="text-marrom text-lg md:text-2xl lg:text-4xl xl:text-5xl leading-relaxed text-justify">
                                    {section.text}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="hidden md:block md:flex-1 md:m-auto">
                    <img
                        src={ProfilePicture}
                        alt="Foto de perfil de Kely Wagner"
                        className="w-full h-full rounded-full"
                        loading="lazy"
                    />
                </div>
                <div className=" m-auto md:flex-1">
                    {myApproachContent.sections.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-2 md:gap-3">
                            <h2 className="text-terracota font-bold text-3xl md:text-5xl lg:text-7xl xl:text-8xl">{section.title}</h2>

                            {section.items && section.items.map((item, i) => (
                                <p key={i} className="text-marrom text-lg md:text-2xl lg:text-4xl xl:text-5xl 
                                leading-relaxed text-justify lg:mb-4">
                                    <strong className="text-verde-salvia text-lg md:text-2xl lg:text-4xl xl:text-5xl 
                                    leading-relaxed text-justif">{item.subtitle}</strong> 
                                    {item.description}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
                <path fill="#F3E5D8" fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,117.3C672,117,768,75,864,64C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </>
    );
};

export default About;
