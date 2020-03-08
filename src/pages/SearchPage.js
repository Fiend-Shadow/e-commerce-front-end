import React, { Component } from "react";
import SearchBar from "./../components/SearchBar";
import { render } from "@testing-library/react";
import products from './products.json'
// import Products from './Products';


class  SearchPage extends Component {
  state = {
    productObj: {}
  }

  newOrderAttempt1 = () => {
    const selectedProduct = 
    const newRandomContact = products.splice(randomNumber, 1);
    // OPCION 2
    // const newRandomContact = contacts[randomNumber];

    let updatedList = [...this.state.contactsList, newRandomContact[0]];
    this.setState({contactsList: updatedList});
    // escribir aca OPCION 2

    console.log(newRandomContact[0]);
    console.log(updatedList);
  };

  handleSubmitAddOrderAttempt2 = (event) => {
    event.preventDefault()
    // alert('Add order btn pressed' + this.state.value);
    // console.log('submit order btn pressed:', this.state.value);    

    Axios.post("http://localhost:5000/product/searchPage" , 
      {productObj:this.state.productObj}, {withCredentials: true})

      .then( result => {
     
        return <SearchPage data={result} />
  
      })
      .catch(err => 
        console.log('An error for the search goes here')
      )
    
  };


  render() {
    return (
      <div>
        <SearchBar />
        <h1>Search Results Page</h1>
        <ul>
          <li>{productName}</li>
          <li>Product 2</li>
          <li>Product 3</li>
          <li>Product 4</li>
        </ul>
        
        
      </div>
    )
  }
}

export default SearchPage;