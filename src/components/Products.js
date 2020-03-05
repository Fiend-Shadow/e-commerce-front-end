import React from 'react'

function Products(props) {
  return (
    <div key={props.key}>
      <img src={props.pictureUrl} alt=""/>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h2>{props.description}</h2>

      <button onClick= {props.someFunctionHere} >Do something</button>  
      
    </div>
  )
}

export default Contacts