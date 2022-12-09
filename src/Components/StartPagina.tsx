import React from "react";
import About from "./About/About";
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
                </div>
             </NavProvider>
        </div>
    )
}

export default Startpagina