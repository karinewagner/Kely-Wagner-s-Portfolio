import React from "react";
import ContactPicture from "../../assets/images/contact.jpg";

const Contact: React.FC = () => {
    return (
        <section className="relative text-left max-w-screen-lg mx-auto px-4 py-5 bg-off-white border-t-4 border-b-4 border-terracota rounded-lg overflow-hidden">

            <div className="absolute inset-0 z-0">
                <img
                    src={ContactPicture}
                    alt="Foto decorativa de contato"
                    className="w-full h-full object-cover opacity-30"
                    loading="lazy"
                />
            </div>

            <article className="relative z-10 flex flex-col gap-2 items-start text-start md:text-left">
                <h2 className="titleSection">
                    Contato
                </h2>
                <div className="space-y-2">
                    <h3 className="text-marrom font-bold text-xl ">
                        Tel./Whatsapp: <span className="font-semibold text-lg">(66) 99974-5066</span>
                    </h3>
                    <h3 className="text-marrom font-bold text-xl">
                        E-mail:{" "}
                        <a
                            href="mailto:kelywagner@gmail.com.br"
                            className="text-marrom font-semibold text-lg"
                        >
                            kelywagner@gmail.com.br
                        </a>
                    </h3>
                </div>
            </article>
        </section>
    );
};

export default Contact;
