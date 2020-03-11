import React, { Component } from "react";
import "./App.css";
// import "./components/Navbar.css"
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import products from "./products.json";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Private from "./pages/Private";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import MyCartPage from "./pages/MyCartPage";
import ProductDetails from "./pages/ProductDetails";
import SearchBar from "./components/SearchBar";


// import products from './somefile.json';
// import Products from './ProductsComponentFile';


class App extends Component {
  state = {
    products: products,
    filterProductList: products,
    showSearchBar: true
  };



  hideSearchBar = () => {
    this.setState({ showSearchBar: false });
  };

  showSearchBar = () => {
    this.setState({ showSearchBar: true });
  };

  searchResult = (oneProduct) => {
    // e.preventDefault();
    

    axios.post("http://localhost:5000/product/searchPage" ,
               {productName:oneProduct}, {withCredentials: true})
    .then((result) => {
      return result; 
    }).catch((err) => {
      console.log(err);
    });
  }



  render() {
    return (
      <div className="container">
        <Navbar hide={this.hideSearchBar} show={this.showSearchBar} className="nav-bar"/>
        {this.state.showSearchBar ? <SearchBar productByName = {this.searchResult}/> :console.log("aslkdef") }
        
        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/profilePage" component={ProfilePage} />
          <Route exact path="/searchPage" component={SearchPage} />
          <PrivateRoute exact path="/myCartPage" component={MyCartPage} />
          <Route exact path="/productDetails" component={ProductDetails}/>

        {/* <PrivateRoute exact path="/private" component={Private} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;