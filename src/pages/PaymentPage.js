import React, { Component } from 'react';
import { withAuth } from "./../lib/Auth";


class PaymentPage extends Component {
    render() {
        return (
            <div>
                <h1>Dear costumer</h1>
                <p>Your payment has been accepted </p>
                <p>thanks for you purchase</p>
            </div>
        )
    }
}

export default withAuth(PaymentPage);