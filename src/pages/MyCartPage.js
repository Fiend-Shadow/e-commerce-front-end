import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";

class MyCartPage extends Component {
  state = {
    orderProducts: [],
    orderId: ""
  };
  componentDidMount() {
    this.getOrderId();
  }

  getOrderId = () => {
    axios
      .get("http://localhost:5000/order/allOrders", { withCredentials: true })
      .then(response => {
        response.data.map(oneOrder => {
          if (!oneOrder.isDone) {
            let productArr = [];
            oneOrder.orderProducts.map(oneProduct => {
              productArr = [{ productInfo: oneProduct }, ...productArr];
            });

            this.setState({ orderId: oneOrder._id, orderProducts: productArr });
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  orderIsDone = () => {};
  render() {
    return (
      <div>
        <h1>MyCartPage</h1>

        <h3> Current Orders</h3>
        <div>
          {this.state.orderProducts.map(oneProduct => {
            return (
              <div key={oneProduct.productInfo.id._id}>
                <p>{oneProduct.productInfo.id.productName}</p>
                <p>{oneProduct.productInfo.id.productPrice}</p>
                <img src={oneProduct.productInfo.id.img_url} alt="" />
                <p>{oneProduct.productInfo.id.productPrice}</p>
                <p>{oneProduct.productInfo.id.productPrice}</p>
              </div>
            );
          })}
        </div>
        <form>
          <button type="submit">proceed to payment</button>
        </form>
      </div>
    );
  }
}

export default withAuth(MyCartPage);
