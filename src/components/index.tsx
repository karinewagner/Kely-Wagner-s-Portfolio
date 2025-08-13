import "../styles/globals.css";

import Navigation from "./navigation/Navigation";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import MyApproach from "../pages/myApproach/MyApproach";
import Benefits from "../pages/benefits/Benefits";
import MyAppointments from "../pages/myAppointments/MyAppointments";
import OnsiteOrOnline from "../pages/onsiteOrOnline/OnsiteOrOnline";
import Contact from "../pages/contact/Contact";
import Footer from "./footer/Footer";

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
                <section id="myApproach">
                    <MyApproach />
                </section>
                <section id="benefits">
                    <Benefits />
                </section>
                <section id="appointments">
                    <MyAppointments />
                </section>
                <section id="onsite-or-online">
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
