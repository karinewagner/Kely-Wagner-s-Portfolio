import "../assets/css/style.css";

import Navigation from "./navigation/Navigation";
import Home from "./home/Home";
import About from "./about/About";
import Benefits from "./benefits/Benefits";
import AreaOfExpertise from "./areaOfExpertise/AreaOfExpertise";
import MyAppointments from "./myAppointments/MyAppointments";
import OnsiteOrOnline from "./onsiteOrOnline/OnsiteOrOnline";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const MyApp: React.FC = () => {
    return (
        <div className="tudo">
            <Navigation />
            <Home />
            <About />
            <Benefits />
            <AreaOfExpertise />
            <MyAppointments />
            <OnsiteOrOnline />
            <Contact />
            <Footer />
        </div>
    );
}

export default MyApp;
