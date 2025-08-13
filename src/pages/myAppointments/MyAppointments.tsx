import React from "react";
import { myAppointmentsContent } from "../../content/myAppointmentsContent";

const MyAppointments: React.FC = () => {
    return (
        <section className="text-left max-w-screen-lg mx-auto px-2 py-4 bg-off-white border-t-4 border-b-4 border-terracota rounded-md">
            <h2 className="titleSection text-center">
                O que esperar dos atendimentos
            </h2>
            <ol className="flex flex-col gap-3">
                {myAppointmentsContent.sections.map((item, index) => (
                    <li key={index}>
                        <p className="text-marrom text-lg leading-relaxed text-justify mb-2">
                            <strong className="text-verde-salvia text-xl">{item.title}</strong> {item.description}
                        </p>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default MyAppointments;
