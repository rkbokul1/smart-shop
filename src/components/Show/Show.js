import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Show.css';

const Show = ({product, handleAddToChoice}) =>{
    // console.log(product)
    const {name, category, brand, img, color, price} = product;

    return(
        <div className="card">
            <img className="imgg" src={img} alt="" /> 
            <div>
                <h2>Name: {name}</h2>
                <p>Category: {category}</p>
                <p>Brand: {brand}</p>
                <p>Color: {color}</p>
                <p>Price: <strong>$ {price}</strong></p>
            </div> 
            <button onClick={ () => handleAddToChoice(product)} className="btn">
                <p>Add To choice List</p>
                <FontAwesomeIcon className="fa-btn" icon={faShoppingCart}/>
            </button>          
        </div>
    );
};

export default Show;