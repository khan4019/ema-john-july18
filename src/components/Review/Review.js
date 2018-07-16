import React, { Component } from 'react';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import {getDatabaseCart, removeFromDatabaseCart, processOrder} from '../../utility/local-storage';
import fakeData from '../../fakeData';
import happy from '../../images/giphy.gif';

// 1.
// created two states. one to put the cart another is to detect whether 
// user clicked on the placed 
class Review extends Component {
    constructor(props) {
        super(props);
        this.state= {
            cart:[],
            orderPlaced:false
        }
    }
    
    componentDidMount() {
        const savedCart = getDatabaseCart();
        // 2. 
        // remember local storage has cart like {"B01BMFXNQE":4,"B01N0XDRYO":2}
        // we extract all the product keys from the savedCart by using Object.keys 
        // and pas savedCart to it

        // However we need detail product info. Thats why we need the fakeData '
        // that's why we imported fake data

        const ids = Object.keys(savedCart);
        const cart = [];
        // 3. 
        // loop through fake data and for each item in fakeData try to find out
        // its value in the savedCart by using item.id
        // if the item is in the saved cart it will return the number
        // if it doesn't exists, its value will be undefined
        // that's why we check the quantity .
        // if quantity is true, this mean the item is in the savedCart
        // we set the quantity of the item and push it to the cart
        // then we set the cart to the state 
        fakeData.forEach(item =>{
            const quantity = savedCart[item.id];
            if(quantity){
                item.quantity = quantity;
                cart.push(item);
            }
        })
        this.setState({cart});
    }

    // 4. 
    // at this point you will create a new component named CartItem
    // see the components folder. It's job is to quickly display name, 
    // quantity of the item you have in the cart and a delete button
    // so that you can remove it from the cart

    // then you will map through the cart and call CartItem component
    // look at the render method and pass this delete handle to the CartItem
    // component so that you can remove the clicked item from the cart
    // like <CartItem key={prod.id} prod={prod} handleDelete={this.handleDelete}
    // you have done the same thing with Product when you have passed handleAdd
    // to the Product Component. 

    // 5. 
    // delete an item is very simple. you will filter the cart
    // while filtering you will take only those item in that that 
    // id doesn't match with the id passed to the handleDelete method
    // then you set the state
    // and call an local-storage method utility function so that as you are
    // deleting, the item is also removed from the local-storage
    // after that if you refresh the page, deleted item will not come back again
    // otherwise, it will keep coming back because, you are not changing the 
    // local storage and React reads the same stored value all the time
    // ... don't worry much keep going and send me an email if it burns your head 
    handleDelete = (id) => {
        const cart = this.state.cart.filter(item => item.id !== id);
        this.setState({cart});
        removeFromDatabaseCart(id);
    }

    // 6.
    // if you look at the cart component below, you will notice we have a children 
    // <Cart cart={this.state.cart}>
    //      <button onClick={this.processOrder}>Place Order</button>
    // </Cart>
    // we created the process order event handler so that it could be attached to the place
    // order button. And then it will display the happy image. 
    // Look inside the render method at top and you will see how 
    // we are displaying happy image
    // as after placing order we are making the cart empty array
    // because everything will be shipped to the user
    // and we have a flag orderPlaced in the state and we are setting it as true
    // after that we are calling a database/local storage method
    // name processOrder. It will clear everything from the local storage
    processOrder = () =>{
        const cart = [];
        this.setState({cart, orderPlaced:true});
        processOrder();
    }

    
    render() {
        // 7. 
        // this is fun. We are declaring a variable happyImage
        // we are checking whether this.state.orderPlaced is true
        // if it is true then we are setting an image to happyImage
        // please notice that we are importing an image at the top
        // named as happy and we are setting it to this image tag

        // finally we are adding {happyImage} at the bottom
        // this one might feel weird this time. There are 
        // better ways of doing condition tag, here we discussed one option
        
        // next go to the cartItem and you will be done
        let happyImage = null;
        if(this.state.orderPlaced){
            happyImage = <img src={happy} alt=""/>
        }
        return (
            <div className="shop">
                <div className="product-container">
                    <h1>Order Review</h1>
                    {
                        this.state.cart.map(prod => 
                        <CartItem key={prod.id} prod={prod} handleDelete={this.handleDelete}></CartItem>)
                    }
                    {happyImage}
                </div>
                <div className="cart-container">
                    <Cart cart={this.state.cart}>
                        <button onClick={this.processOrder}>Place Order</button>
                    </Cart>
                </div>
            </div>
        );
    }
}

export default Review;