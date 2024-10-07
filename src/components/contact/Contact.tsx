import React from "react";
import "./style.css";

const Contact: React.FC = () => {
    return (
        <section className="contact">
            <h2 className="contact-title">Contato:</h2>
            <div>
                <h3 className="contact-subtext">Tel./Whatsapp: (66) 99974-5066</h3>
                <h3 className="contact-subtext">
                    E-mail: <a href="mailto:kelywagner@gmail.com.br" className="email-link">kelywagner@gmail.com.br</a>
                </h3>
            </div>
        </section>
    );
}

export default Contact;
