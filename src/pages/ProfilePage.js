import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>ProfilePage</h1>
        <h2>Welcome Human </h2>
        {/* <h1>Welcome {this.props.user.username}</h1> //=>this should be correct */}
      </div>
    );
  }
}

export default withAuth(ProfilePage);