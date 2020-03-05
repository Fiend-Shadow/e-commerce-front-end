import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import SearchBar from "./../components/SearchBar";

class ProductDetails extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <h1>ProductDetails</h1>
        <h2>Title of Product </h2>
        <img src="" />
        {/* <h1>Welcome {this.props.user.username}</h1> //=>this should be correct */}
      </div>
    );
  }
}

export default withAuth(ProductDetails);