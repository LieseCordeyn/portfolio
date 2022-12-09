import React from 'react'
import { useNav } from '../../Hooks/useNav';
import Heading from '../general/heading';
import Introduction from './introduction';
import Socials from './Socials';


function About(){

    const AboutRef = useNav('About');

    return (
        <div id='AboutContainer' ref={AboutRef}>
            <Heading number={3} title="About"/>
            <div>
                <Socials/>
                <Introduction/>
            </div>
        </div>
    )
}

export default About