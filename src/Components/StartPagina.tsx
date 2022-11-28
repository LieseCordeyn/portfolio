import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navigation from "./Navigation/navigation";
import Works from "./Works/Works";

function Startpagina(){
    return(
        <div>
            <Navigation/>
             <div>
                 <Home/>
                 <Works/>
                 <About/>
                 <Contact/>
             </div>
        </div>
    )
}

export default Startpagina