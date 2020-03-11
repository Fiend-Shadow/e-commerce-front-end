import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import { withAuth } from "./../lib/Auth";


class AdminAddProduct extends React.Component {
  state = {
    productName: "",
    productPrice: 0,
    description: "",
    category: "",
    quantity: 0,
    img_file: ""
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const {productName, productPrice, description, category, quantity, img_url} = this.state

    axios.post("http://localhost:5000/product/adminAddProduct",
    {productName, productPrice, description, category, quantity, img_url}, {withCredentials: true})
      .then((result) => {
        console.log('result from handleFormSubmit',result);        
        return result; 
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlePhotoChange = event => {
    console.log('event', event.target.files)
    
    const file = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('photo', file);
    this.setState ({img_file: uploadData});
  };


  render () {

    const {productName, productPrice, description, category, quantity} = this.state
    console.log(quantity);

    return (

      <div>

        <h1>Add Product Page</h1>

        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">

        <label >Product name:</label>
        <input type="text" name="productName" value = {productName} onChange={this.handleChange}  placeholder="Enter Product Name" autoComplete="off" />

        <label >Product price:</label>
        <input type="number" name="productPrice" value = {productPrice} onChange={this.handleChange} placeholder="Enter Product Price" autoComplete="off" />

        <label >Quantity:</label>
        <input type="number" name="quantity" value = {quantity} onChange={this.handleChange} placeholder="Enter Product Quantity" autoComplete="off" />
        
        <label >Category:</label>
          <input list="categories_options" name="category" value = {category} onChange={this.handleChange} placeholder="select"/>
          
          <datalist id="categories_options">
              <option value="Beauty">Beauty</option>
              <option value="Electronics">Electronics</option>
              <option value="Sports">Sports</option>
              <option value="House">House</option>
          </datalist>

          <label >Product description:</label>
          <input type="textarea" name="description" value = {description} onChange={this.handleChange} autoComplete="off"/>

          <label>Upload Photo JPG or PNG format only:</label>
          <input type="file" name="photo" onChange={this.handlePhotoChange}/>
       

          <button type="submit">Create Product!</button>

        </form>

        <br></br>

        <Link to={"/adminEditProduct"} className="nav-btn" >
          <button>Go to Edit Products</button>
        </Link>

        {/* <Link to={"/adminEditProduct"} className="nav-btn" onClick={this.props.show}>
          <button>Go to Edit Products</button>
        </Link>  */}

        <br></br>

        <Link to={"/adminPage"} className="nav-btn" onClick={this.props.show}>
          <button>Back to Admin Page</button>
        </Link>

      </div>

        /* <form action="/adminAddProduct" method="post" enctype="multipart/form-data" class="needs-validation">

          <label for="">Product name:</label>
          <input type="text" name="productName" required class="form-control" placeholder="Enter Product Name" autoComplete="off" />
 
          <label for="">Category:</label>
          <input list="type_options" name="category" required class="form-control" placeholder="select">
          
          <datalist id="categories_options">
              <option value="Beauty">Beauty</option>
              <option value="Electronics">Electronics</option>
              <option value="Sports">Sports</option>
              <option value="House">House</option>
          </datalist>


          <label for="">Product description:</label>
          <input type="textarea" name="description" class="form-control" autoComplete="off">

          <label for="photo">Upload Photo JPG or PNG format only:</label>
          <input type="file" name="photo" class="form-control-file" autoComplete="off">

          <button type="submit" class="btn btn-primary">Create Product!</button>

        <form/>        */
 
    )
  }
}

export default withAuth(withRouter(AdminAddProduct));