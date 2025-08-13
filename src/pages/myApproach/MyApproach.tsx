import React from "react";
import { myApproachContent } from "../../content/myApproachContent";

const MyApproach: React.FC = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-4 pt-4 pb-0 bg-off-white border-3 border-terracota rounded-lg">
            {myApproachContent.sections.map((section, idx) => (
                <div key={idx}>
                    <h2 className="titleSection">{section.title}</h2>
                    {section.items && section.items.map((item, i) => (
                        <p key={i} className="text-marrom text-lg leading-relaxed text-justify mb-4">
                            <strong className="text-verde-salvia text-xl">{item.subtitle}</strong> {item.description}
                        </p>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default MyApproach;
