import React, { Component } from "react";
import searchService from "./../lib/search-service";
import Axios from "axios";
import {Link} from "react-router-dom";
import SearchPage from "./../pages/SearchPage";


class SearchBar extends React.Component {
    state = {
      productName: ""
    };

    // componentDidMount() {
    // }
    
    searchProduct = searchValue =>{
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


  // handleSubmitSearch = (event) => {
    // event.preventDefault()
    // alert('something was submitted: ' + this.state.value);
    // console.log('something was submitted: ');

    // Axios.post("http://localhost:5000/order/searchPage" ,
    //            {productName:this.state.productName}, {withCredentials: true})
      // .then( result => {
      
      //   return <SearchPage data={result} />
        //redirect to searchPage
        // with productName info
        // console.log(productName);
      // })
      // .catch(err => 
      //   console.log('An error for the search goes here')
      // )    
  // };

  render () {
    return (
      
         <form onSubmit={this.props.productByName(this.state.productName)}>
        <label>
          SearchBar:
          <input type="text" name = "productName" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Link to ="/searchPage" data={this.props.productByName(this.state.productName)}>
        <input type="submit" value="Search" />
        </Link>
      </form>
      
     
    )
  }
}

export default SearchBar;