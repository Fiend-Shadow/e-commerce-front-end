import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";


class SearchPage extends Component {
  state = {
    products: [],
    productsMatches: [],
    isLoading: true
  };

  componentDidMount() {
    // this.setState({products:[]});

    const values = queryString.parse(this.props.location.search);

    const productName = values.product;
    this.searchResult();
     this.productMatch(productName);
    
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      const values = queryString.parse(this.props.location.search);

      const productName = values.product;
      
      this.searchResult();
      this.productMatch(productName);
      
    }
  }

  searchResult = () => {
    axios
      .get(process.env.REACT_APP_API_URL+"/product/allProducts")
      .then(response => {
        this.setState ({products: response.data , isLoading: false});
      })
      .catch(err => {
        console.log(err);
      });
  };


  productMatch = (word)=>{
    let matchesArr = [];
    this.state.products.forEach((oneElement)=>{

      if (oneElement.productName.includes(word)){
        matchesArr =[...matchesArr , oneElement];
      }
      
    })
    
    this.setState({productsMatches: matchesArr})
  }

  submitProdDetails = event => {
    event.preventDefault();
    // this.setState({products:[]});
    const { value } = event.target[0];

    this.props.history.push(`/productDetails?productD=${value}`);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Admin Search Page</h1>

        {!this.state.isLoading ? (
          this.state.productsMatches.map(prod => {
            return (
              <div key={prod._id}>                
                <form onSubmit={this.submitProdDetails}>
                  <h3> {prod.productName} </h3>

                  <img src={prod.img_url} alt="" />
                  <p>{prod.productPrice}</p>
                  <button type="submit" value={prod.productName}>
                    Details
                  </button>
                  <form
                    onSubmit={() => {
                      return true;
                    }}
                  >
                    <button type="submit">add to cart</button>
                  </form>
                </form>
              </div>
            );
          })
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

export default AdminSearchPage;
