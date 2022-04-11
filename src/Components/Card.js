import React from 'react'
import "./Card.css";
function Card(props) {
  return (
    <div className="card-container">
     <div className="Title-card"><h4>{props.itemName}</h4></div>   
    
          
             <img className="card-image" 
            src={props.image}>
                </img>
       

    <div className="description">  <p>{props.Description} </p></div>
  
  
</div>
  )
}

export default Card