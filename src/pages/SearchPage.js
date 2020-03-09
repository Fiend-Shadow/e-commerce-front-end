import React, { Component } from "react";
//
// import products from './products.json'
// import Products from './Products';
import axios from 'axios';
import queryString from 'query-string';
class  SearchPage extends Component {
  state = {
    products: []
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

  handleSubmitAddOrderAttempt2 = (event) => {
    event.preventDefault()
    // alert('Add order btn pressed' + this.state.value);
    // console.log('submit order btn pressed:', this.state.value);    

    axios.post("http://localhost:5000/product/searchPage" , 
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
        <h1>Search Results Page</h1>
        <ul>
        {
          this.state.products.length > 0 
            ? this.state.products.map((prod) => {
              return <li key={prod._id}> {prod.productName}</li>
            }
          ) : null
        }
          <li></li>
          {/* <li>{this.props.data}</li> */}
          <li>Product 3</li>
          <li>Product 4</li>
        </ul>
        
        
      </div>
    )
  }
}

export default SearchPage;