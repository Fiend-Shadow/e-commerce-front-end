import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";


class Navbar extends Component {
  state = {
    showSearchBar: true
  }

  // logoutWithHide = () => {
  //   return this.props.logout, this.props.hide;
  // }

  render() {
    const { user, logout, isLoggedIn } = this.props;

  

    return (
      <nav className="navbar">
        <Link to={"/"} className="nav-btn" onClick={this.props.show}>
          <h4>Home</h4>
        </Link>

        <Link to={"/profilePage"} className="nav-btn" onClick={this.props.show}>
          <h4>Profile</h4>
        </Link>

        <Link to={"#"} className="nav-btn" onClick={this.props.show}>
          <h4>Categories</h4>
        </Link>
        
        {isLoggedIn ? (
          <>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-button" onClick={this.props.hide}>Login</button>{" "}
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button" onClick={this.props.hide}>Sign Up</button>{" "}
            </Link>
          </>

        )}

        <Link to={"/myCartPage"} className="nav-btn" onClick={this.props.show}>
          <h4>MyCartPage</h4>
        </Link>
      </nav>
    );
  }
}


export default withAuth(Navbar);