import React, { Component } from 'react';
import { Link }  from "react-router-dom";

class OrderPlaced extends Components {
    render() {
        return(
            <div className="order-placed pd-30 text-center">
                <h1 className = "pt-50">Thank you for your order</h1>
                <h3>You will receive it in 3 busineess days</h3>

                <Link className="btn btn-info btn-lg mt-30" to="/history">
                    Check your order history <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
                </Link>
            </div>
        );
    }
}

export default OrderPlaced;