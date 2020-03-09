import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import SearchBar from "./../components/SearchBar";
import queryString from "query-string";
import axios from "axios";

class ProductDetails extends Component {
  state = {
    productDetails: {} 
  }

  componentDidMount() {
    // let product_id = this.props.match.params.product_id;
    // this.setState({
    //   product_id: product_id
    // })
    const values = queryString.parse(this.props.location.search)
    const productName = values.product;
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
      this.setState({productDetails:response.data}); 
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <h1>ProductDetails</h1>
        <h2>Title of Product </h2>
        
        <h4>{this.state.productDetails}</h4>
        {/* <h1>Welcome {this.props.user.username}</h1> //=>this should be correct */}
      </div>
    );
  }
}

export default withAuth(ProductDetails);