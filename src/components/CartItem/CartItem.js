import React, { Component } from 'react';
import './CartItem.css';

// this one is very simple 
// you receive prod from the Review Component and set it to const prod
// they you read the name, prod.quantity, prod.shipping
// while calling the cartItem

// you have passed another prop named handleDelete and bind it below with the button
// and pass prod.id 
// previously you have passed prod. Now pass prod.id. 
// by using this id we will update the cart

// Don't forget to update the css in CartItem.css and import CartItem.css to this file


// for deployment. if you have done the firebase setup during the workshop. 
// just stop the command line by pressing Ctrl + C and then run the two command below
// npm run build
// firebase deploy
// go to the url and refresh the page, few times
// i have done mine here: https://ema-john-july.firebaseapp.com/

// if you missed the firebase deployment. follow the instructions 
// here: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#firebase

// That's all you have to do this time. 
// See you next time
// Take care

// Don't hesitate to reach out and ask me any question you might have.
// all the best



class CartItem extends Component {
    render() {
        const prod = this.props.prod;
        return (
            <div className="cart-item">
                <h4 className="product-name">{prod.name}</h4>
                <p>Quantity: {prod.quantity}</p>
                <p><small>shipping: {prod.shipping}</small></p>
                <button onClick={() => this.props.handleDelete(prod.id)}>Remove Item</button>
            </div>
        );
    }
}

export default CartItem;