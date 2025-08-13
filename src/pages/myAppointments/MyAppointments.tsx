import React from "react";
import { myAppointmentsContent } from "../../content/myAppointmentsContent";

const MyAppointments: React.FC = () => {
    return (
        <section className="text-left max-w-screen mx-auto px-2 py-4 lg:px-4 lg:py-6 bg-off-white border-t-4 border-b-4 border-terracota rounded-md">
            <h2 className="titleSection text-center">
                O que esperar dos atendimentos
            </h2>
            <ol className="flex flex-col gap-3">
                {myAppointmentsContent.sections.map((item, index) => (
                    <li key={index}>
                        <p className="text-marrom text-lg lg:text-3xl leading-relaxed text-justify mb-2">
                            <strong className="text-verde-salvia text-xl lg:text-4xl">{item.title}</strong> {item.description}
                        </p>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default MyAppointments;
