import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";
import { withRouter } from "react-router-dom";

class MyCartPage extends Component {
  state = {
    orderProducts: [],
    orderId: ""
  };
  componentDidMount() {
    this.getOrderId();
  }
  handlePaymentBtn = (event)=>{
    this.orderIsDone(event);
    this.props.history.push("/paymentPage");
  }

  getOrderId = () => {
    axios
      .get(process.env.REACT_APP_API_URL+"/order/allOrders", { withCredentials: true })
      .then(response => {
        console.log(response.data)
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

  orderIsDone = (event) => {
    event.preventDefault();
    axios.put(process.env.REACT_APP_API_URL+"/order/oneOrder" , {orderId : this.state.orderId} ,{withCredentials:true})
    .then((response) => {
      // console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  };
  render() {
    
    return (
      <div>
        <h1>MyCartPage</h1>

        <h3> Current Orders</h3>
        {!this.state.orderProducts.length==0 ? 
        <>
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
        <form onSubmit={this.handlePaymentBtn}>
          <button type="submit">proceed to payment</button>
        </form>
        </>
        :
          <p>
            There is no Current Orders
          </p>
        }
       
      </div>
    );
  }
}

export default withRouter(withAuth(MyCartPage));
