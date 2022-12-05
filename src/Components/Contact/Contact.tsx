import React from 'react'
import { useNav } from '../../Hooks/useNav';
import Heading from '../general/heading';


function Contact(){

    const ContactRef = useNav('Contact');

    return (
        <div id='ContactContainer' ref={ContactRef}>
            <Heading number={4} title="Contact"/>
            <p>contact</p>
        </div>
    ) 
}

export default Contact