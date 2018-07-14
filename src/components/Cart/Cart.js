import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div>
                <h5>Order Summary</h5>
                <p><small>Items Ordered: {this.props.cart.length}</small></p>
                <button>Order Review</button>
            </div>
        );
    }
}

export default Cart;