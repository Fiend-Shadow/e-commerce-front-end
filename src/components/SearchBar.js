import React, { Component } from "react";
import searchService from "./../lib/search-service";
import Axios from "axios";
import {Link} from "react-router-dom";
import SearchPage from "./../pages/SearchPage";
import { withRouter } from "react-router-dom";
import "./SearchBar.css";
import products from '.././'

class SearchBar extends React.Component {
    state = {
      productName: "",
      productsList: []
    };

    // componentDidMount() {
    // }    
    searchProduct = (searchValue) =>{
    const filterProductList = this.state.productsList.filter(element => {
      let lowProduct = element.name.toLowerCase();
      let lowProductIncludes = lowProduct.includes(searchValue.toLowerCase());
      return lowProductIncludes;
    });
    
    this.setState({filterProductList: filterProductList});
  };
  

  //Changes handler on SearchBar
  handleChange = (event)=> {
    const { name, value } = event.target;
    // console.log('this.state.productName', this.state.productName)    
   
    this.setState({[name]:value});
  };


  handleSubmitSearch = (event) => {
    event.preventDefault();
    let {productName} = this.state ;
    
    this.props.history.push(`/searchPage?product=${productName}`);
    // this.searchProduct();
    
  };

  render () {
    return (
      // <form onSubmit={this.props.productByName(this.state.productName)}>
         <form id="search-bar-container" onSubmit={this.handleSubmitSearch}>
        <label>
          SearchBar:
          <input type="text" name = "productName" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">search</button>
        {/* <Link to ="/searchPage" data={this.props.productByName(this.state.value)}>
        <input type="submit" value="Search" />
        </Link> */}
      </form>
      
     
    )
  }
}

export default withRouter(SearchBar);