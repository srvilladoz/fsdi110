import React, { Component } from 'react';

import storeContext from "./storeContext";

class GlobalState extends Component {
    state = { 
        cart: [],
     };
    render() { 
        return (
        <storeContext.Provider
            value={{
                cart: this.state.cart,

                addProductToCart: this.addProductToCart,
                removeProductFromCart: this.removeProductFromCart,
            }}
        >
            {this.props.children}
        </storeContext.Provider>
        );
    }

    addProductToCart = (product) => {
        
        let currentCart = [...this.state.cart];

        let found = false;
        for (let i = 0; i < currentCart.length; i++) {
            let item = currentCart[i];

            if (item._id === product._id) {
                item.quantity += product.quantity;
                found = true;
            }
        }

        if(!found) {
        currentCart.push(product);
        }

        this.setState({cart: currentCart});
        console.log(currentCart);
    };

    removeProductFromCart = (productId) => {
        //remove the product with _id equal to productId

        //let copy = [...this.state.cart];

        //opt 1 - new array

        // let newCart = [];
        // for (let i = 0; i < copy.length; i++) {
        //     let item = copy[i];
        //     if(item._id != productId) {
        //         newCart.push(item);
        //     }
        // }
        // this.setState({cart:newCart});

        //opt 2 - removing from array
        for(let i = 0; i < copy.length; i++) {
            let item = copy[i];

            if (item._id === productId) {
                copy.splice(i, 1);
                break;
            }
        }
        this.setState({ cart: copy });

        // opt 3 - filter
        let copy = this.state.cart.filter((prod) => prod._id !== productId);
        this.setState({ cart: copy });

        console.log("Todo: Remove Product");
    };
}
 
export default GlobalState;