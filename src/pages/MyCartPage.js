import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import SearchBar from "./../components/SearchBar";

class MyCartPage extends Component {
  render() {
    return (
      <div>
        <h1>MyCartPage</h1>
        <h2>Cart Page of Human </h2>
        {/* <h1>Welcome {this.props.user.username}</h1> //=>this should be correct */}
      </div>
    );
  }
}

export default withAuth(MyCartPage);