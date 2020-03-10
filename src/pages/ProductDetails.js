import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import queryString from "query-string";
import axios from "axios";

class ProductDetails extends Component {
  state = {
    productDetails: []
  }

  componentDidMount() {
   
    const values = queryString.parse(this.props.location.search)
    
    const productName = values.productD;
    this.oneProductDetails(productName);
  }
  // componentDidMount() {
  //   const values = queryString.parse(this.props.location.search)
  //   const productName = values.product;
  //   this.searchResult(productName);
  // }
  oneProductDetails = (oneProduct) => {
    // e.preventDefault();

    axios.post("http://localhost:5000/product/searchPage" ,
               {productName:oneProduct}, {withCredentials: true})
    .then((response) => {
      this.setState({productDetails:response.data[0]}); 
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    console.log("after render",this.state.productDetails.productName);
    return (
      <div>
        
        
        <h1>{this.state.productDetails.productName}</h1>
        <img src={this.state.productDetails.img_url} />
        <p>{this.state.productDetails.description}</p>
        <p>{this.state.productDetails.productPrice}</p>
          <form onSubmit={()=>{return true}}>
          <button type="submit">add to cart</button>
          <input type="number" min="1" max="30"></input>
          </form>
        
      </div>
    );
  }
}

export default withAuth(ProductDetails);