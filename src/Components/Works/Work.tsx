import WorkType from "../../Type/WorkType"

function Work(props: WorkType){
    return (<div>
                <p>{props.Title}</p>
            </div>)
}

export default Work