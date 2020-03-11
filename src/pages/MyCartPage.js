import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";

class MyCartPage extends Component {
  state = {
    orderList : []
  }
  componentDidMount() {
    this.getOrders();
  }
  
  getOrders = ()=>{
    axios.get("http://localhost:5000/order/allOrders")
    .then((response) => {
      this.setState({orderList : response.data})
    }).catch((err) => {
      console.log(err);
    });
  }
  
  render() {
    return (
      <div>
        <h1>MyCartPage</h1>
        
        <h3> Current Orders</h3>
          {this.state.orderList.forEach((oneOrder)=>{
            if (!oneOrder.isDone){
              
                oneOrder.orderProducts.forEach((productInOrder)=>{
                  return(
                    <div>
                    <h2>{productInOrder.quantity}</h2>
                    <p>{productInOrder.productName}</p>
                    </div>
                  )
                })
              
            }
          })}
      </div>
    );
  }
}

export default withAuth(MyCartPage);