import HeadingType from "../../Type/HeadingType"

 function Heading(props: HeadingType) {
     return (
         <div className="Heading">
            <p>0{props.number}</p>
            <p>{props.title}</p>
         </div>
     )
 }

 export default Heading