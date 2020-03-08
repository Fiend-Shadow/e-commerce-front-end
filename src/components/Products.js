import React from 'react'
import { Link } from "react-router-dom";

function Products(props) {

  return (
    <div key={props.key}>
      <img src={props.imgUrl} alt=""/>
      <h1>{props.productname}</h1>
      <h2>{props.productPrice}</h2>
      <h2>{props.description}</h2>
      <h2>{props.quantity}</h2>
      <Link to={'/productDetails/' + props._id} />
      <button onClick= {props.someFunctionHere} >Do something</button>  
      
    </div>
  )
}

export default Products