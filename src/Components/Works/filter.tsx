import { useEffect, useState } from "react"

function Filter(){
    let [selectedFilter, setSelectedFilter] = useState(String)

    const options = ["Featured", "Final Works", "Expert Lab"]

    useEffect(() => {
        setSelectedFilter("Featured")
    }, [])

    const changeFilter = (filter: any) => {
            setSelectedFilter(filter)
    }


    return (<div id="filter">
                <div id="categories">
                    {options.map((x) => {
                       return( <p className={selectedFilter === x ? 'activeClass' : ''} onClick={() => changeFilter(x)}>{x}</p>)
                    })}
                </div>
                <div id="years">
                    <p>2020-2023</p>
                </div>
            </div>
        )
}

export default Filter