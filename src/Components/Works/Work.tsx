import WorkType from "../../Type/WorkType"

function Work(props: WorkType){
    return (<div className="works">
                <div className="infoWorks">
                    <p>{props.Title}</p>
                    <div>
                        {props.Tags.map((x) => {
                            return <p key={`${props._id}${props.Tags.indexOf(x)}`}>{x}</p>
                        })}
                    </div>
                </div>
                <div className="imageWorks">
                   <img src={props.ImageUrls[0]} alt={`${props.Tags} screenshot`} /> 
                </div>
                <div className="descriptionWorks">
                    <div>
                        {props.Description}
                    </div>
                    <a href={props.GithubLink} target="_blank" rel="noreferrer">View Github code</a>
                </div>
                
            </div>)
}

export default Work