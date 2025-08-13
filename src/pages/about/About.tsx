import React from "react";
import { aboutContent } from "../../content/aboutContent";

const About: React.FC = () => {
    return (
        <section className="max-w-screen mx-auto px-2 py-4 lg:px-4 lg:py-6 bg-bege rounded-lg lg:rounded-3xl shadow-md">
            {aboutContent.sections.map((section, idx) => (
                <div key={idx}>
                    <h2 className="titleSection">{section.title}</h2>
                    
                    {section.text && (
                        <p className="text-marrom text-lg lg:text-3xl leading-relaxed text-justify">
                            {section.text}
                        </p>
                    )}
                </div>
            ))}
        </section>
    );
};

export default About;
