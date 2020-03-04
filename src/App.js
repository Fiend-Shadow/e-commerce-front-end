import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

// import products from './somefile.json';
// import Products from './ProductsComponentFile';


class App extends Component {
  // state = {
  //   products: []
  // };

  // componentDidMount() {
  //   console.log('did mount something');    
  //   axios
  //   .get("here goes the adress for our products data")
  //   .then ( response => {
  //     this.setState({ products: response.data });
  //   })
  //   .catch(err => console.log(err)
  //   )
  // }  

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevProps, prevState);
  //   console.log('update');    
  // }


  render() {
    return (
      <div className="container">
        <Navbar />
        {/* <SearchBar /> */}

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
        </Switch>
      </div>
    );
  }
}

export default App;
