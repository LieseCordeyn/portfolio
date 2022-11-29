import React from 'react';
import { useNav } from '../../Hooks/useNav';
import NavLink from '../Navigation/NavLink';
import Foto from '../../assets/Liese.png'


function Home(){

    const homeRef = useNav('Home');

    return(
        <div id='HomeContainer' ref={homeRef}>
             <h1>Hi, I'm Liese Cordeyn</h1>
             <h2>Full Stack Developper</h2>
             <div id='ViewMoreButton'>
                <NavLink navLinkId="View More" scrollToId="WorksContainer"/> 
             </div>
              <img src={Foto} alt="" width="10px"/>
        </div>
    )
}

export default Home