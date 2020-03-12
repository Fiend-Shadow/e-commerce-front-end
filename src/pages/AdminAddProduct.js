import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import productService from "../lib/product-service";
class AdminAddProduct extends React.Component {
  state = {
    productName: "",
    productPrice: 0,
    description: "",
    category: "",
    quantity: 0,
    img_url: undefined
  };

  componentDidUpdate(prevProps, prevState) {
    
    
  }


  handleFormSubmit = event => {
    event.preventDefault();
    const {
      productName,
      productPrice,
      description,
      category,
      quantity,
      img_url
    } = this.state;


    axios
      .post(
        "http://localhost:5000/product/adminAddProduct",
        { productName, productPrice, description, category, quantity, img_url },
        {
          withCredentials: true,
        }
      )
      .then(result => {
        console.log("result from handleFormSubmit", result);
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // this method handles just the file upload
  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);
    productService
      .handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ img_url: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };
  render() {
    const {
      productName,
      productPrice,
      description,
      category,
      quantity
    } = this.state;
    console.log(quantity);
    return (
      <div>
        <h1>Add Product Page</h1>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>Product name:</label>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={this.handleChange}
            placeholder="Enter Product Name"
            autoComplete="off"
          />
          <label>Product price:</label>
          <input
            type="number"
            name="productPrice"
            value={productPrice}
            onChange={this.handleChange}
            placeholder="Enter Product Price"
            autoComplete="off"
          />
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.handleChange}
            placeholder="Enter Product Quantity"
            autoComplete="off"
          />
          <label>Category:</label>
          <input
            list="categories_options"
            name="category"
            value={category}
            onChange={this.handleChange}
            placeholder="select"
          />
          <datalist id="categories_options">
            <option value="Beauty">Beauty</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports">Sports</option>
            <option value="House">House</option>
          </datalist>
          <label>Product description:</label>
          <input
            type="textarea"
            name="description"
            value={description}
            onChange={this.handleChange}
            autoComplete="off"
          />
          <label>Upload Photo JPG or PNG format only:</label>
          <input type="file" onChange={e => this.handleFileUpload(e)} />
          <button type="submit">Create Product!</button>
        </form>
        <br></br>
        <Link to={"/adminEditProduct"} className="nav-btn">
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
    );
  }
}
export default withAuth(withRouter(AdminAddProduct));