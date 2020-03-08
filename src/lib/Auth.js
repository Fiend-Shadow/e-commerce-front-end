//	lib/Auth.js

import React, { Component } from "react";
import authService from "./auth-service"; // IMPORT functions for axios requests to API
const { Consumer, Provider } = React.createContext();

// HOC to create a Consumer
const withAuth = WrappedComponent => {
  return class extends Component {
    render() {
      return (

        <Consumer>
          {
            (value) => {
            {/* const { login, signup, logout, user, isLoggedIn } = value; */}

            return (
              <WrappedComponent
                user={value.user}
                isLoggedIn={value.isLoggedIn}
                login={value.login}
                signup={value.signup}
                logout={value.logout}
                {...this.props}
              />
            );
          }}
        </Consumer>
        
      );
    }
  };
};

/* 
// HOC - function component example of the same functionality
function withAuthFunc(WrappedComponent) {
  return function(props) {
    // props will belong to the WrappedComponent
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}
 */

// Provider
class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
    isLoading: true
  };

  componentDidMount() {
    authService
      .me()
      .then(user =>
        this.setState({ isLoggedIn: true, user: user, isLoading: false })
      )
      .catch(err =>
        this.setState({ isLoggedIn: false, user: null, isLoading: false })
      );
  }

  signup = (username,email, password) => {
    authService
      .signup({ username, email, password })
      .then(user => this.setState({ isLoggedIn: true, user }))
      .catch(err => console.log(err));
  };

  login = (email, password) => {
    authService
      .login({ email, password })
      .then(user => this.setState({ isLoggedIn: true, user }))
      .catch(err => console.log(err));
  };

  logout = () => {
    authService
      .logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch(err => console.log(err));
  };

  render() {
    const { isLoading, isLoggedIn, user } = this.state;
    const { login, logout, signup } = this;

    return (
      <Provider value={{ isLoading, isLoggedIn, user, login, logout, signup }}>
        {this.props.children}
      </Provider>
    );
    /*
      <Provider> `value={}` data will be available to all <Consumer> components 
    */
  }
}

export { withAuth, AuthProvider };

//      Consumer ,  Provider
