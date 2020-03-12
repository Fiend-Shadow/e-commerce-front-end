import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";
import "./../components/SearchPage.css";

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
    this.searchResult(productName);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      const values = queryString.parse(this.props.location.search);

      const productName = values.product;

      this.searchResult(productName);
      // this.productMatch(productName);
    }
  }

  searchResult = productName => {
    axios
      .get(process.env.REACT_APP_API_URL + "/product/allProducts")
      .then(response => {
        const productsMatches = this.productMatch(productName, response.data);
        
        this.setState({ products: response.data, productsMatches ,isLoading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  productMatch = (word, products) => {
    let matchesArr = [];
    console.log(products);
    products.forEach(oneElement => {
      if (oneElement.productName.includes(word)) {
        matchesArr = [...matchesArr, oneElement];
      }
    });

    return matchesArr;
  };

  submitProdDetails = event => {
    event.preventDefault();
    // this.setState({products:[]});
    const { value } = event.target[0];

    this.props.history.push(`/productDetails?productD=${value}`);
  };

  addToCart = event => {
    event.preventDefault();
    console.log(event.target[0]);
    const { value } = event.target[0];
    axios
      .post(
        process.env.REACT_APP_API_URL + "/order/create",
        { productId: value },
        { withCredentials: true }
      )
      .then(result => {
        console.log("result", result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Search Results Page</h1>

        {!this.state.isLoading ? (
          this.state.productsMatches.map(prod => {
            return (
              <div key={prod._id}>
                <form onSubmit={this.submitProdDetails}>
                  <h3> {prod.productName} </h3>

                  <img src={prod.img_url} alt="" id="search-img" />
                  <p>{prod.productPrice}</p>
                  <button type="submit" value={prod.productName}>
                    Details
                  </button>
                </form>
                <form onSubmit={this.addToCart}>
                  <button type="submit" value={prod._id}>
                    add to cart
                  </button>
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

export default SearchPage;
