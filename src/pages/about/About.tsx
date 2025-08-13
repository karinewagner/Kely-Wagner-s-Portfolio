import React from "react";
import { aboutContent } from "../../content/aboutContent";

const About: React.FC = () => {
    return (
        <section className="max-w-screen-lg mx-auto p-4 bg-bege rounded-lg shadow-md">
            {aboutContent.sections.map((section, idx) => (
                <div key={idx}>
                    <h2 className="titleSection">{section.title}</h2>
                    
                    {section.text && (
                        <p className="text-marrom text-lg leading-relaxed text-justify">
                            {section.text}
                        </p>
                    )}
                </div>
            ))}
        </section>
    );
};

export default About;
