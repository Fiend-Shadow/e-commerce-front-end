import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
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
import Axios from "axios";

// import products from './somefile.json';
// import Products from './ProductsComponentFile';


class App extends Component {
  state = {
    products: products,
    filterProductList: products,
    showSearchBar: true
  };

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

  hideSearchBar = () => {
    this.setState({ showSearchBar: false });
  };

  showSearchBar = () => {
    this.setState({ showSearchBar: true });
  };

  searchResult = (oneProduct) => {
    // e.preventDefault();

    Axios.post("http://localhost:5000/product/searchPage" ,
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
        <Navbar hide={this.hideSearchBar} show={this.showSearchBar}/>
        {this.state.showSearchBar ? <SearchBar productByName = {this.searchResult}/> :console.log("aslkdjf") }
        
        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/profilePage" component={ProfilePage} />
          <AnonRoute exact path="/searchPage" component={SearchPage} />
          <PrivateRoute exact path="/myCartPage" component={MyCartPage} />
          <AnonRoute exact path="/productDetails/:product_id" component={ProductDetails}/>

        {/* <PrivateRoute exact path="/private" component={Private} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;