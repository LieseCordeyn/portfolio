import { useEffect, useState } from "react"

function Filter(props: { onFilter: (arg0: any) => void; filter: string }){

    const options = ["Featured", "Final Works", "Expert Lab"]


    const changeFilter = (filter: any) => {
            props.onFilter(filter)
    }


    return (<div id="filter">
                <div id="categories">
                    {options.map((x) => {
                       return( <p className={props.filter === x ? 'activeClass' : ''} onClick={() => changeFilter(x)}>{x}</p>)
                    })}
                </div>
                <div id="years">
                    <p>2020-2023</p>
                </div>
            </div>
        )
}

export default Filter