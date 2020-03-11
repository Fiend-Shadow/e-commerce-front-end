import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import { withAuth } from "./../lib/Auth";


class AdminEditProduct extends React.Component {   

render () {
  return (

    <div>

      <h1>Edit Product Page (Admin)</h1>

      <form action="/adminEditProduct" method="post" enctype="multipart/form-data">

      <label for="">Product name:</label>
      <input type="text" name="productName" required  placeholder="Enter Product Name" autocomplete="off" />
      
      <label for="">Category:</label>
        <input list="type_options" name="category" required placeholder="select"/>
        
        <datalist id="categories_options">
            <option value="Beauty">Beauty</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports">Sports</option>
            <option value="House">House</option>
        </datalist>


        <label for="">Product description:</label>
        <input type="textarea" name="description"  autocomplete="off"/>

        <label for="photo">Upload Photo JPG or PNG format only:</label>
        <input type="file" name="photo" autocomplete="off"/>

        <button type="submit">Edit Product!</button>

      </form>

      <form>
        <button type="submit">Delete Product!</button>
      </form>

      <br></br>

      <Link to={"/adminAddProduct"} className="nav-btn" onClick={this.props.show}>
          <button>Go to Add Products</button>
        </Link> 

      <br></br>

      <Link to={"/adminPage"} className="nav-btn" onClick={this.props.show}>
        <button>Back to Admin Page</button>
      </Link>

    </div>
   )
  }
}

    export default withAuth(withRouter(AdminEditProduct));