import React from "react";
import './Show.css';

const Show = (props) =>{
    // console.log(props)
    const {name, category, brand, img, color, price} = props.product;

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
            <button className="btn">
                <p>Add To choice List</p>
            </button>          
        </div>
    );
};

export default Show;