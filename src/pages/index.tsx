import "../styles/globals.css";

import Navigation from "../components/navigation/Navigation";
import Home from "./home/Home";
import About from "./about/About";
import Benefits from "./benefits/Benefits";
import MyAppointments from "./myAppointments/MyAppointments";
import OnsiteOrOnline from "./onsiteOrOnline/OnsiteOrOnline";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";

const MyApp: React.FC = () => {
    return (
        <div className="tudo">
            <Navigation />
            <main>
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="benefits">
                    <Benefits />
                </section>
                <section id="myAppointments">
                    <MyAppointments />
                </section>
                <section id="onsiteOrOnline">
                    <OnsiteOrOnline />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default MyApp;
