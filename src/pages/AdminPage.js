import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";


class AdminPage extends Component {
   state = {
      productName: "",
      productsList: []
    }

  //Changes handler on SearchBar
  handleChange = (event)=> {
    const { name, value } = event.target;
    // console.log('this.state.productName', this.state.productName)    
   
    this.setState({[name]:value});
  };


  handleSubmitSearch = (event) => {
    event.preventDefault();
    let {productName} = this.state ;
    
    this.props.history.push(`/adminAddProducts?product=${productName}`);
    // this.searchProduct();
  }

    
  render() {
    return (
      <div>
        <h1>AdminPage</h1>
        <h2>Hello Admin!</h2>

        <Link to={"/adminAddProduct"} className="nav-btn" onClick={this.props.show}>
          <button>Add Product</button>
        </Link>

        <Link to={"/adminEditProduct"} className="nav-btn" onClick={this.props.show}>
          <button>Edit Products</button>
        </Link> 

      </div>
    )
  }
}

export default withAuth(AdminPage);