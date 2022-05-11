import React from "react"
import 'bootstrap/dist/css/bootstrap.css';


const DetailsView =(props:any)=>{
    
    return(
        <div className="float-right" >
          <div className="alert alert-primary" role="alert">
              Tree Name:<h2>{props.data}</h2>
        </div>
          
        </div>
       
    ) 
}

export default DetailsView