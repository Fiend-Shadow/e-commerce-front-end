import React, { Component } from "react";
//
// import products from './products.json'
// import Products from './Products';
import axios from 'axios';
import queryString from 'query-string';
import {withRouter} from 'react-router';


class SearchPage extends Component {
  state = {
    products: [],
    isLoading: true
  }

  componentDidMount() {
    // this.setState({products:[]});
    
    const values = queryString.parse(this.props.location.search)
    console.log(values);
    
    const productName = values.product;
    this.searchResult(productName);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.search !== this.props.location.search) {
      const values = queryString.parse(this.props.location.search)
      
      const productName = values.product;
      this.searchResult(productName);
    }
    
  }


  // shouldComponentUpdate(nextState) {
  //   const compareProductName = this.state.products!== nextState.products;
  //   console.log(compareProductName);
    
  //   return compareProductName;
  // }
  

    searchResult = (oneProduct) => {
    // e.preventDefault();
    // this.setState({products:[]});
    
    axios.post("http://localhost:5000/product/searchPage" ,
               {productName:oneProduct}, {withCredentials: true})
    .then((response) => {
      this.setState({products:response.data, isLoading: false}); 
      console.log('state de...',this.state.products);
      
    })
    .catch((err) => {
      console.log(err);
    });
  }
  

  // newOrderAttempt1 = () => {
  //   const selectedProduct = 
  //   const newRandomContact = products.splice(randomNumber, 1);
  //   // OPCION 2
  //   // const newRandomContact = contacts[randomNumber];

  //   let updatedList = [...this.state.contactsList, newRandomContact[0]];
  //   this.setState({contactsList: updatedList});
  //   // escribir aca OPCION 2

  //   console.log(newRandomContact[0]);
  //   console.log(updatedList);
  // };


  handleSubmitProdDetails = (event) => {
    event.preventDefault();
    // this.setState({products:[]});

    const productName = event.value ;
    console.log("productName", productName);
    this.props.history.push(`/productDetails?product=${productName}`)
  };


  render() {
    console.log('this.state in render', this.state)
    return (
      <div>
        <h1>Search Results Page</h1>
        
        {
          !this.state.isLoading 
            ? this.state.products.map((prod) => {
              return (
                <div key={prod._id}>
                <p>hello capu </p>
                <form onSubmit={this.handleSubmitProdDetails}>
                <h3> {prod.productName}</h3>
                <p>{prod.description}</p>
                <img src={prod.img_url} alt="" />
                <p>{prod.productPrice}</p>
                  <button type="submit" value={prod.productName}>Details</button>
                </form>
                </div>
                )
            }
          ) : 
          <div>loading...</div>
        }
          
        
        
        
      </div>
    )
  }
}

export default SearchPage;