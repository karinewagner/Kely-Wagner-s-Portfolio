import "../assets/css/style.css"

import Navigation from "./navigation/Navigation.tsx";
import Home from "./home/Home.tsx";
import About from "./about/About.tsx";
import Benefits from "./benefits/Benefits.tsx";
import AreaOfExpertise from "./areaOfExpertise/AreaOfExpertise.tsx";
import MyAppointments from "./myAppointments/MyAppointments.tsx";
import OnsiteOrOnline from "./onsiteOrOnline/onsiteOrOnline.tsx";
import Contact from "./contact/Contact.tsx";
import Footer from "./footer/Footer.tsx";

function MyApp() {

    return (
        <div className="tudo">
            <Navigation/>
            <Home/>
            <About/>
            <Benefits/>
            <AreaOfExpertise/>
            <MyAppointments/>
            <OnsiteOrOnline/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default MyApp