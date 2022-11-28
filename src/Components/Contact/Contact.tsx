import React from 'react'
import { useNav } from '../../Hooks/useNav';


function Contact(){

    const ContactRef = useNav('Contact');

    return (
        <div id='ContactContainer' ref={ContactRef}>
            <p>contact</p>
        </div>
    ) 
}

export default Contact