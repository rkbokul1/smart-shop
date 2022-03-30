import React from "react";
import "./Cart.css"

const Cart = (props) =>{
    // console.log(props);
    const {name, price} =props.cart;

    return(
        <div className="cart-info">
            <p>{name}</p>      
        </div>
    )
};

export default Cart;