import React from 'react'
import { useNav } from '../../Hooks/useNav';
import Heading from '../general/heading';


function Works() {

    const WorksRef = useNav('Works');

    return (
        <div id='WorksContainer' ref={WorksRef}>
            <Heading number={2} title="Works"/>
             <p>Works</p>
        </div>
    ) 
}

export default Works