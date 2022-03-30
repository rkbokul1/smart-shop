import React from "react";
import "./Cart.css"

const Cart = (props) =>{
    // console.log(props);
    const {name, img} =props.cart;

    return(
        <div>
            <div className="cart-info">
            <img className="crt-img" src={img} alt="" />
            <p>{name}</p>
            </div>
        </div>
    )
};

export default Cart;