import React, { Component } from 'react';
import { getDatabaseCart } from '../../utility/local-storage';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state={
            cart:[]
        }
    }
    componentDidMount() {
        const savedCart = getDatabaseCart();
        console.log(savedCart);
    }
    
    render() {
        return (
            <div>
                <h1>This is Review</h1>
            </div>
        );
    }
}

export default Review;