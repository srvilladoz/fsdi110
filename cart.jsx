import React, { Component } from 'react';
import storeContext from "../store/storeContext";
import ItemInCart from "./itemInCart";

import "./cart.css";
import ItemService from '../services/itemService';

class Cart extends Component {
    static contextType = storeContext;
    state = {  };
    render() { 
        return ( 
            <div className="cart-page">
                <h1>Your Current Cart</h1>
                <h4>You have {this.context.cart.legth} products in cart</h4>

                <div className="d-flex">
                <div className="cart-container">

                    { this.context.cart.map((prod) => (
                        <itemInCart key={prod._id} data={prod}></itemInCart>
                        ))}


                </div>

                

                <div className="total-container px-5 py-3">
                    <label>Your Total:</label>
                    <h6>$ {this.getTotal()}</h6>

                    <input type="text" placeholder="Coupon Code" name="couponCode" value={this.state.couponCode} onChange={this.handleInputChange} />
                    <button disabled={ !this.state.couponCode } onClick={this.handleApplyCoupon} className="btn btn-sm btn-info">Apply Coupon</button>


                    <hr />
                    <button onClick={this.handleApplyCoupon} className="btn btn-primary">Proceed to payment</button>
                </div>
                </div>
            </div>
         );
    }

    handleSubmitOrder = () => {
        let order = {
            userId: 123,
            couponCode: this.state.couponCode,
            products: this.context.cart
        };

        console.log("Submitting", order);
        console.log(JSON.stringify(order));
    };

    handleInputChange = (event) => {
        this.setState ({ [event.target.name]: event.target.value });
    };

    handleApplyCoupon = async () => {
        if(!this.state.couponCode) {
            return;
        }
    }

    //validate on server
    let service = new ItemService();
    let res = await service.validateCouponCode(this.state.couponCode);
    if(!res) {
        console.log("Invalid coupon code");
        this.setState({ discount: 0 });
        return;
    }
    
    getTotal = () => {
        let total = 0;
        for(let i = 0; i < this.context.cart.length; i++) {
            let item = this.context.cart[i];
            total += item.price * item.quantity;
        }
    }

    handleSubmitOrder = async () => {
        let order = {
            userId: 123,
            couponCode: this.state.couponCode,
            products: this.context.cart
        };

        let service = new ItemService();
        let res = await service.submitOrder(order);
        if(res) {
            console.log("response data: ", res);
            this.props.history.push("/order-saved");
        }
        else{
            //request failed
            //show an error
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    };

    handleApplyCoupon = async () => {
        console.log("Validating coupon code:", this.state.couponCode);

        //validate on server

        let service = new ItemService();
        let res = await service.validateCouponCode(this.state.couponCode);
        if(!res) {
            console.log("Invalid coupon code!!");
            this.setState({ discount: 0 });
            return;
        }

        console.log(res.discount);
    

    //apply the discount
    this.setState({ discount: res.discount });
};
    getTotal = () => {
        let total = 0;
        for(let i=0; i<this.context.cart.length; i++){
            let item = this.context.cart[i];
            total += item.price * item.quantity;
        }

        //apply discount
        total = total - (total * this.state.discount) / 100;

        return total.toFixed(2);
        
    };
}
   
 
export default Cart;