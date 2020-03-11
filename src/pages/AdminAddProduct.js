import React from 'react';
import SearchBar from "./../components/SearchBar";
import axios from "axios";
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import { withAuth } from "./../lib/Auth";


class AdminAddProduct extends React.Component {
   

  render () {
    return (

      <div>

        <h1>Add Product Page</h1>

        <Link to={"/adminPage"} className="nav-btn" onClick={this.props.show}>
          <button>Back to Admin Page</button>
        </Link>

        <form action="/adminAddProduct" method="post" enctype="multipart/form-data">

        <label for="">Product name:</label>
        <input type="text" name="productName" required class="form-control" placeholder="Enter Product Name" autocomplete="off" />
        

        </form>

      </div>



        /* <form action="/adminAddProduct" method="post" enctype="multipart/form-data" class="needs-validation">

          <label for="">Product name:</label>
          <input type="text" name="productName" required class="form-control" placeholder="Enter Product Name" autocomplete="off" />

          <label for="">Category:</label>
          <input list="type_options" name="category" required class="form-control" placeholder="select">
          
          <datalist id="categories_options">
              <option value="Beauty">Beauty</option>
              <option value="Electronics">Electronics</option>
              <option value="Sports">Sports</option>
              <option value="House">House</option>
          </datalist>


          <label for="">Product description:</label>
          <input type="textarea" name="description" class="form-control" autocomplete="off">

          <label for="photo">Upload Photo JPG or PNG format only:</label>
          <input type="file" name="photo" class="form-control-file" autocomplete="off">

          <button type="submit" class="btn btn-primary">Create Product!</button>

        <form/>        */
 
    )
  }
}

export default withAuth(withRouter(AdminAddProduct));