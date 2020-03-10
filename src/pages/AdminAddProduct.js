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
     {/* <form onSubmit={this.props.productByName(this.state.productName)}> */}
        <h1>Add Product Page</h1>

         <Link to={"/adminPage"} className="nav-btn" onClick={this.props.show}>
          <button>Back to Admin Page</button>
        </Link>
      </div>
  
    )
  }
}

        //ADD PRODUCT EXAMPLE 


{/* <h1>Add boat</h1>

<form action="/myboats/add" method="post" enctype="multipart/form-data" class="needs-validation">

      <label for="">Boat name:</label>
      <input type="text" name="name" required class="form-control" placeholder="make it unique" autocomplete="off">

      <label for="">Type:</label>
      <input list="type_options" name="type" required class="form-control" placeholder="select">
      <datalist id="type_options">
          <option value="canoe">Canoe</option>
          <option value="kayak">Kayak</option>
          <option value="rowing">Rowing</option>
          <option value="inflatable">Inflatable</option>
          <option value="paddle">Paddle</option>
          <option value="boat">Boat</option>
      </datalist>


      <label for="">Listing description:</label>
      <input type="textarea" name="description" class="form-control" autocomplete="off">
  
      <label for="">Max users:</label>
      <input type="number" name="forMaxNumOfUsers" min="1" value="1" required class="form-control">

      <label for="">Brand:</label>
      <input type="text" name="brand" class="form-control" autocomplete="off">

      <label for="photo">Upload Photo (JPG or PNG format only):</label>
      <input type="file" name="photo" class="form-control-file" autocomplete="off">

    <button type="submit" class="btn btn-primary">ADD THIS BOAT</button>
    </form> */}

    
export default withAuth(withRouter(AdminAddProduct));