import { useEffect, useState } from "react"
import { worksService } from "../../Service/WorksService"
import WorkType from "../../Type/WorkType"
import Filter from "./filter"
import Work from "./Work"
//import data from "../../assets/data.json"

function WorkList(){
    const [works, setWorks] = useState(Array<WorkType>)
    const [chosenWorks, setChosenWorks] = useState(Array<WorkType>)
    let [selectedFilter, setSelectedFilter] = useState("Featured")


    useEffect(() => {
        worksService.fetchWorks()
            .then(Response => {
                setWorks(Response)
            })

         //setWorks(data)
         setChosenWorks(works.filter((x: { Categories: string | string[] }) => x.Categories.includes(selectedFilter)))
    }, [works])

    const handleChange = (filter: any) => {
        setSelectedFilter(filter)
        setChosenWorks(works.filter((x: { Categories: string | string[] }) => x.Categories.includes(filter)))
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