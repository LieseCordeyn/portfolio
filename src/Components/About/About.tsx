import React from 'react'
import { useNav } from '../../Hooks/useNav';


function About(){

    const AboutRef = useNav('About');

    return (
        <div id='AboutContainer' ref={AboutRef}>
            <p>About</p>
        </div>
    )
}

export default About