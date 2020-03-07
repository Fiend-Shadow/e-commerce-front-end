import React from "react";

import Axios from "axios";
import { Redirect } from "react-router-dom";



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

    console.log("filterProductlist", filterProductList);
    this.setState({filterProductList: filterProductList});
  };

  //this works
  handleChange = (event)=> {
    const { name, value } = event.target;

    this.setState({[name]:value});
  };


  handleSubmitSearch = (event) => {
    event.preventDefault()
    // alert('something was submitted: ' + this.state.value);
    // console.log('something was submitted: ');

    console.log('this.state.productName', this.state.productName)

    // searchService
    // .productByName(this.state.productName)
    Axios.post("http://localhost:5000/product/searchPage" , {productName:this.state.productName}, {withCredentials: true})
    .then( result => {
      
      return <Redirect to="/searchPage" data={result} >
      <searchPage />
      </Redirect>
      // with productName info
      // console.log(productName);
    })
    .catch(err => 
      console.log('An error for the search goes here')
    )    
    
  };

  render () {
    return (
      <form onSubmit={this.handleSubmitSearch}>
        <label>
          SearchBar:
          <input type="text" name = "productName" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default SearchBar;