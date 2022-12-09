import { useEffect, useState } from "react"
import { worksService } from "../../Service/WorksService"
import WorkType from "../../Type/WorkType"
import Filter from "./filter"
import Work from "./Work"

function WorkList(){
    const [works, setWorks] = useState(Array<WorkType>)
    const [chosenWorks, setChosenWorks] = useState(Array<WorkType>)
    let [selectedFilter, setSelectedFilter] = useState(String)


    useEffect(() => {
        setSelectedFilter("Featured")
        worksService.fetchWorks()
            .then(Response => {
                setWorks(Response)
                setChosenWorks(works.filter(x => x.Categories.includes("Featured")))
            })
    }, [])

    const handleChange = (filter: any) => {
        setSelectedFilter(filter)
        setChosenWorks(works.filter(x => x.Categories.includes(filter)))
    }

    return(
    <div id="WorkLists">
        <Filter onFilter={handleChange} filter={selectedFilter}/>
        {works.length > 0? chosenWorks.map((x: WorkType) => {
            return(<Work key={x._id} _id={x._id} Title={x.Title} Categories={x.Categories} Description={x.Description} GithubLink={x.GithubLink} ImageUrls={x.ImageUrls} Tags={x.Tags}/>)
        })
        :
        <p>Loading...</p>
    }
    </div>)
}

export default WorkList