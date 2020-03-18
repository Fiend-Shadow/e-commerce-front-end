import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import './Signup.css';

class Signup extends Component {
  state = {
    username: "",
    password: ""
    // showSearchBar: true
  };
  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;

    this.props.signup(username, email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // toggleSearchBar = () => {
  //   this.setState({ showSearchBar: !this.state.showSearchBar });
  // };

  render() {
    const { username, email, password } = this.state;
    return (
      <div id="signup-container">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit} id="signup-form">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <input type="submit" value="Signup" id="signup-btn" />
        </form>

        <p>Already have account?</p>
        <Link to={"/login"} id="login-link"> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
