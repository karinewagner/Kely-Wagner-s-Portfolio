import React from "react";
import { myApproachContent } from "../../content/myApproachContent";

const MyApproach: React.FC = () => {
    return (
        <section className="max-w-screen mx-auto px-2 py-4 lg:px-4 lg:py-6 bg-off-white border-3 border-terracota rounded-lg lg:rounded-3xl">
            {myApproachContent.sections.map((section, idx) => (
                <div key={idx}>
                    <h2 className="titleSection">{section.title}</h2>
                    {section.items && section.items.map((item, i) => (
                        <p key={i} className="text-marrom text-lg lg:text-3xl leading-relaxed text-justify mb-4">
                            <strong className="text-verde-salvia text-xl lg:text-4xl">{item.subtitle}</strong> {item.description}
                        </p>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default MyApproach;
