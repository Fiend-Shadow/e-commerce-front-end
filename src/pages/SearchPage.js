import React, { Component } from "react";
//
// import products from './products.json'
// import Products from './Products';
import axios from 'axios';
import queryString from 'query-string';
class  SearchPage extends Component {
  state = {
    products: {}
  }


  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    const productName = values.product;
    this.searchResult(productName);
  }


  searchResult = (oneProduct) => {
    // e.preventDefault();

    axios.post("http://localhost:5000/product/searchPage" ,
               {productName:oneProduct}, {withCredentials: true})
    .then((response) => {
      this.setState({products:response.data}); 
    })
    .catch((err) => {
      console.log(err);
    });
  }
  

 


  handleSubmitSearch = (event) => {
    event.preventDefault();
    const productName = event.target ;
    console.log(productName);
    
    this.props.history.push(`/productDetails?product=${productName}`)
  };


  render() {
    return (
      <div>
        <h1>Search Results Page</h1>
        
        {
          this.state.products.length > 0 
            ? this.state.products.map((prod) => {
              return (
                <div key={prod._id}>
                <form onSubmit={this.handleSubmitSearch} >
                <h3> {prod.productName}</h3>
                <p>{prod.description}</p>
                <img src={prod.img_url} alt="" />
                <p>{prod.productPrice}</p>
                  <button type="submit">Details</button>
                </form>
                </div>
                )
            }
          ) : null
        }
          
        
        
        
      </div>
    )
  }
}

export default SearchPage;