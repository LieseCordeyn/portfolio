import React from 'react';
import { useNav } from '../../Hooks/useNav';


function Home(){

    const homeRef = useNav('Home');

    return(
        <div id='HomeContainer' ref={homeRef}>
             <p>Home</p>
        </div>
    )
}

export default Home