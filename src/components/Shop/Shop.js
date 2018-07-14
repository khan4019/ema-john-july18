import React, { Component } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

class Shop extends Component {
    constructor() {
        super();
        this.state={
            products:[],
            cart:[]
        }
    }

    componentDidMount() {
        const first10 = fakeData.slice(0,10);
        this.setState({products: first10});
    }

    handleAdd = (prod) =>{
        const newCart = [...this.state.cart, prod];
        this.setState({cart:newCart});
    }
    
    render() {
        return (
            <div className="shop">
                <div className="product-container">
                    <h2>Shop Now</h2>
                    {
                        this.state.products.map(prod => <Product key={prod.id} prodInfo={prod} handleAdd={this.handleAdd}></Product>)
                    }
                </div>
                <div className="cart-container">
                   <Cart cart={this.state.cart}/>
                </div>
            </div>
        );
    }
}

export default Shop;