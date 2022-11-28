import React from 'react'
import { useNav } from '../../Hooks/useNav';


function Works() {

    const WorksRef = useNav('Works');

    return (
        <div id='WorksContainer' ref={WorksRef}>
             <p>Works</p>
        </div>
    ) 
}

export default Works