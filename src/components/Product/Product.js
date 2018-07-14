import React, { Component } from 'react';
import './Product.css'

class Product extends Component {
    render() {
        const prodInfo = this.props.prodInfo;
        return (
            <div className="product">
                <div>
                    <img src={prodInfo.img} alt=""/>
                </div>
                <div>
                    <h4 className="product-name">{prodInfo.name}</h4>
                    <div className="product-info">
                        <div>
                            <p><small>by: {prodInfo.seller}</small></p>
                            <p>${prodInfo.price}</p>
                            <button>Add to Cart</button>
                        </div>
                        <div>
                            <h5>Features</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;