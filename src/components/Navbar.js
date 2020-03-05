import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;

    return (
      <nav className="navbar">
        <Link to={"/"} className="nav-btn">
          <h4>Home</h4>
        </Link>

        <Link to={"/ProfilePage"}className="nav-btn">
          <h4>Profile</h4>
        </Link>

        <Link to={"/SearchPage"} className="nav-btn">
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
              {" "}
              <button className="navbar-button">Login</button>{" "}
            </Link>
            <br />
            <Link to="/signup">
              {" "}
              <button className="navbar-button">Sign Up</button>{" "}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
