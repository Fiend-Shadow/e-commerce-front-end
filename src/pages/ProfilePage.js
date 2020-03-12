import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";

class ProfilePage extends Component {
  state={
    user : {},
    showForm: false
  }

  componentDidMount() {
    const {username , password, email} = this.props.user;
    this.setState({user: {username , password, email}});
  }
  
  toggleForm = ()=>{
    this.setState({showForm : !this.state.showForm});
  }

  editUser = (event) => {
    event.preventDefault();
    this.toggleForm();
    const {username, email , password} = event.target;
    axios.post("/auth/edit", {username, email , password})
    .then((response) => {
      let userData = response.data;
      this.setState({user : {userData}});
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    
    return (
      <>
      {this.state.showForm ? (
        <>
        <form onSubmit={this.editUser}>
        <input type="text" id="username" name="username" placeholder={this.state.user.username}/>
        <input type="text" id="email" name="email" placeholder={this.state.user.email}/>
        <input type="text" id="password" name="password" placeholder={this.state.user.password}/>
        <button type="submit">submit edit</button>
        </form>

        <form onSubmit={this.toggleForm}>
        <button>Cancel</button>
        </form>
        </>

      ) : (
        <div>
       <h1>ProfilePage</h1>
        <h2>Welcome Human </h2>
        <h3>{this.state.user.username}</h3>
        <p>{this.state.user.email}</p>
        <form onSubmit={this.toggleForm}>
          <button type="submit">edit</button>
        </form>
        </div>
        
        )}
        </>
    );
  }
}

export default withAuth(ProfilePage);