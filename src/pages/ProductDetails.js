import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import SearchBar from "./../components/SearchBar";

class ProductDetails extends Component {
  state = {
    product_id: {} 
  }

  componentDidMount() {
    let product_id = this.props.match.params.product_id;
    this.setState({
      product_id: product_id
    })
  }


  render() {
    return (
      <div>
        <SearchBar />
        <h1>ProductDetails</h1>
        <h2>Title of Product </h2>
        <img src="" />
        <h4>{this.state.product_id}</h4>
        {/* <h1>Welcome {this.props.user.username}</h1> //=>this should be correct */}
      </div>
    );
  }
}

export default withAuth(ProductDetails);