import React, { Component } from "react";


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

    searchProduct = searchValue =>{
    const filterProductList = this.state.productsList.filter(element => {
      let lowProduct = element.name.toLowerCase();
      let lowProductIncludes = lowProduct.includes(searchValue.toLowerCase());
      return lowProductIncludes;
    });
    console.log("filterProductlist", filterProductList);
    this.setState({filterProductList: filterProductList});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmitSearch(event) {
    alert('something was submitted: ' + this.state.value);
    console.log('something was submitted: ');
    let {value, name} = this.target;
    this.setState({[name]: value});
    this.props.searchProduct(value);
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitSearch}>
        <label>
          SearchBar:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;