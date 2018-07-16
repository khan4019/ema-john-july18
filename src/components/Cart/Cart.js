import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
    render() {
        // calculate price, shipping cost, and quantity 

        const cart = this.props.cart;
        let price = 0;
        let shipping = 0;
        let quantity = 0;
        // we are looping through all the items in cart
        // if item has a property quantity we take that if it is undefined we set count as 1
        // then price of the item is item.price multiplied by count of items
        // We are adding shipping cost. and assuming one shipping cost for one or more item
        // we are also adding a count there 
        cart.forEach(item => {
            const count = item.quantity || 1;
            price += item.price * count;
            shipping += item.shipping; 
            quantity += count;
        })

        // now calculate total before tax which is sum of price and shipping.
        // then we calculate tax as 10% so 
        const totalBeforeTax = price + shipping;
        const estimatedTax = 0.1 * totalBeforeTax;
        const total = totalBeforeTax + estimatedTax;

        // At below we have created a table with five rows
        // we added very simple style as well in the css file
        // AND never forget to import the css file in your cart.js
        // sometimes javascript 0.1+0.2 becomes 0.30000000000001 
        // to prevent that we added .toFixed(2) below so that it always displays 2 decimal
        

        // special note:
        // at the bottom we replaced <button>Order Review</button> by {this.props.children}
        // this.props.children is an special props that always passed by react
        // the value of this.props.children is equal the value inside tha cart
        // for example 
        //<Cart>
        //    <button>Order Review</button>
        //</Cart>
        // here whatever inside the Cart tag will become this.props.children
        // If you go to the shop, you will see the  <Cart cart={this.state.cart}/> has some children
        // it has a button wrapped inside a Link. This Link came from React Router
        // you will notice an import at the top. So that if you click on the button 
        // you will be navigated to the review page
        //that's all
        return (
            <div className="cart">
                <h5>Order Summary</h5>
                <p><small>Items Ordered: {this.props.cart.length}</small></p>
                <table>
                    <tbody>
                        <tr>
                            <td>Items: </td>
                            <td>${price.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping &amp; handling:</td>
                            <td>${shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total before Tax</td>
                            <td>${totalBeforeTax.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Estimated Tax:</td>
                            <td>${estimatedTax.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Order Total:</td>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <br/>
                {this.props.children}
            </div>
        );
    }
}

export default Cart;