import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";
import "./ProfilePage.css";

class ProfilePage extends Component {
  state = {
    user: {},
    orders: [],
    showForm: false
  };

  componentDidMount() {
    const { username, password, email } = this.props.user;
    this.setState({ user: { username, password, email } });
    this.pastOrders();
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  editUser = event => {
    event.preventDefault();
    this.toggleForm();
    const { username, email, password } = event.target;
    axios
      .post("/auth/edit", { username, email, password })
      .then(response => {
        let userData = response.data;
        this.setState({ user: { userData } });
      })
      .catch(err => {
        console.log(err);
      });
  };

  pastOrders = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/order/allOrders", {
        withCredentials: true
      })
      .then(response => {
        let orderProducts = [];
        let orderDetails = [];
        response.data.forEach(oneOrder => {
          if (oneOrder.isDone) {
            oneOrder.orderProducts.map(oneProduct => {
              orderProducts = [
                { productInfo: oneProduct.id },
                ...orderProducts
              ];
            });
            orderDetails = [
              { orderId: oneOrder._id, orderProducts: orderProducts },
              ...orderDetails
            ];
          }
        });
        this.setState({ orders: orderDetails });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log("this.state", this.state);
    return (
      <>
        {this.state.showForm ? (

          <div id="edit-info-container">
          
            <p>Edit your personal information</p>
            <form onSubmit={this.editUser} id="edit-info-form">
              <input
                type="text"
                id="username"
                name="username"
                placeholder={this.state.user.username}
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder={this.state.user.email}
              />
              <input
                type="text"
                id="password"
                name="password"
                placeholder={this.state.user.password}
              />
              <button type="submit" className="edit-profile-btn" id="submit-edit">Submit Edit</button>
            </form>

            <form onSubmit={this.toggleForm}>
              <button id="cancel-btn">Cancel</button>
            </form>

          </div>
        ) : (
          <div id="profile-page-container">

            <h1>{this.state.user.username}'s profile</h1>

            <h4>{this.state.user.email}</h4>
            <p>Edit your personal information</p>
            <form onSubmit={this.toggleForm}>
              <button type="submit" className="edit-profile-btn">edit</button>
            </form>

            
            <h3 className="orders-title">Past Orders</h3>

            {this.state.orders.map((oneOrder, i) => {
              return (

                <div className="order-card">
                  <h3>Order number #{i + 1} </h3>
                  {oneOrder.orderProducts.map(oneProduct => {
                    return <p>{oneProduct.productInfo.productName}</p>
                  })}
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default withAuth(ProfilePage);
