import React, { Component } from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmitSearch(event) {
    let {value, name} = e.target;
    this.setState({[name]: value});
    this.props.searchProduct(value);

    // alert('something was submitted: ' + this.state.value);
    // console.log('something was submitted: ');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitSearch}>
        <label>
          SearchBar:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" onClick={this.handleSubmitSearch}/>
      </form>
    );
  }
}

export default SearchBar;