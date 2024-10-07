import React from "react";
import "./style.css";

const MyAppointments: React.FC = () => {
    return (
        <section className="section-my-appointments">
            <h3>O que esperar dos meus atendimentos</h3>
            <ol>
                <li>
                    <strong>Cuidado e Acolhimento</strong>
                    <p>
                        Sessões com muito acolhimento e cuidado para que se sinta à vontade em compartilhar a
                        sua história, sem julgamentos, com ética, sigilo, respeito e empatia.
                    </p>
                </li>
                <li>
                    <strong>Comunicação</strong>
                    <p>
                        A comunicação clara e objetiva faz parte do processo terapêutico, para que possamos
                        alinhar as expectativas e alcançar resultados consistentes.
                    </p>
                </li>
                <li>
                    <strong>Proatividade</strong>
                    <p>
                        Sessões dinâmicas e focadas na ação, com o objetivo de ajudar você a encontrar soluções
                        práticas e aplicáveis ao seu cotidiano.
                    </p>
                </li>
                <li>
                    <strong>Resiliência</strong>
                    <p>
                        Trabalhar a capacidade de enfrentar adversidades com força e flexibilidade, promovendo
                        uma maior adaptação às mudanças da vida.
                    </p>
                </li>
                <li>
                    <strong>Companheirismo</strong>
                    <p>
                        Um ambiente de apoio constante, onde você pode contar com uma terapeuta que caminha ao
                        seu lado durante o processo de autodescoberta e cura.
                    </p>
                </li>
            </ol>
        </section>
    );
}

export default MyAppointments;
