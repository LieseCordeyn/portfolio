import React from 'react'
import { useNav } from '../../Hooks/useNav';
import Heading from '../general/heading';
import WorkList from './WorkList';


function Works() {

    const WorksRef = useNav('Works');

    return (
        <div id='WorksContainer' ref={WorksRef}>
            <Heading number={2} title="Works"/>
            <WorkList/>
        </div>
    ) 
}

export default Works