import React from 'react'
import { useNav } from '../../Hooks/useNav';
import Heading from '../general/heading';


function About(){

    const AboutRef = useNav('About');

    return (
        <div id='AboutContainer' ref={AboutRef}>
            <Heading number={3} title="About"/>
            <p>About</p>
        </div>
    )
}

export default About