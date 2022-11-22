import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Works from "./Works/Works";

function Startpagina(){
    return(
        <div>
             <p>StartPagina</p>
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