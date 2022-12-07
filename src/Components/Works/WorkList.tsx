import { useEffect, useState } from "react"
import { worksService } from "../../Service/WorksService"
import WorkType from "../../Type/WorkType"
import Work from "./Work"

function WorkList(){
    const [works, setWorks] = useState(Array<WorkType>)

    useEffect(() => {
        worksService.fetchWorks()
            .then(Response => {
                setWorks(Response)
            })
    }, [])

    return(
    <div id="WorkLists">
        {works.length > 0? works.map((x: WorkType) => {
            return(<Work key={x._id} _id={x._id} Title={x.Title} Categories={x.Categories} Description={x.Description} GithubLink={x.GithubLink} ImageUrls={x.ImageUrls} Tags={x.Tags}/>)
        })
        :
        <p>Loading...</p>
    }
    </div>)
}

export default WorkList