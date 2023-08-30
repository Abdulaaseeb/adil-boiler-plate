type resulttype = {
    marks:any,
    total:any
}
export default function QuizzResult(props:resulttype){
return(
    <div className="mt-5">
    <span>Your Marks is:{props.marks}</span><span>/{props.total}</span>
    {/* <h2>The Total Marks is:{props.total}</h2> */}
    </div>
)
}