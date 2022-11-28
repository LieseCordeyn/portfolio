import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navigation from "./Navigation/navigation";
import Works from "./Works/Works";
import NavProvider from '../context/navContext';


function Startpagina(){
    return(
        <div>
            <NavProvider>
            <Navigation/>
                <div>
                    <Home/>
                    <Works/>
                    <About/>
                    <Contact/>
                </div>
             </NavProvider>
        </div>
    )
}

export default Startpagina