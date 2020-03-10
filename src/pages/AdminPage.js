import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <h1>AdminPage</h1>
        <h2>Hello Admin!</h2>
        {/* <h1>Welcome {this.props.user.username}</h1> //=>this should be correct */}
      </div>
    );
  }
}

export default withAuth(AdminPage);