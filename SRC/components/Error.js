import { useRouteError } from "react-router-dom";

const Error = ()=>{
     const err = useRouteError()
    return(
        <div>
            <h1>Oops..! || {err.status  +" : "+  err.statusText}</h1>
            <h3>Something went wrong.</h3>
        </div>
    )
}

export default Error;