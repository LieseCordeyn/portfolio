import { useEffect, useState } from "react"
import { worksService } from "../../Service/WorksService"

function WorkList(){
    const [works, setWorks] = useState()
    const [chosenWorks, setChosenWorks] = useState("Uitgelicht")

    useEffect(() => {
        worksService.fetchWorks()
            .then(Response => {
                setWorks(Response)
            })
    })

    return(<p> Hi</p>)
}

export default WorkList