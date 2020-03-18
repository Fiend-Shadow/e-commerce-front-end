import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";
import "./Login.css"

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.login(email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div id="login-container">
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit} id="login-form">
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
          
          <input type="submit" value="Login" id="login-btn"/>

        </form>

        <p>Don't have account?</p>
        <Link to={"/signup"}> Signup</Link>

      </div>
    );
  }
}

export default withAuth(Login);
