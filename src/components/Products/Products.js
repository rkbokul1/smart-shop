// import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState } from "react";
import Show from "../Show/Show";
import Cart from "../Cart/Cart"
import './Products.css';

const Products = () =>{
    // fetch data
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // set cart
    let [carts, setCarts] = useState([]);
    const handleAddToChoice = (product) =>{
        const newCart = [...carts, product];
        setCarts(newCart);
    }

    // cart-function
    let [choice, setChoice] = useState(0)
    const handleGenerateChoice = () =>{
        const gen = Math.ceil(Math.random() * 4);
        setChoice(gen);

    }


    return(
        <div className="container">
            <div className="product-container">
                {
                    products.map(product => <Show 
                        product = {product} key ={product.id}
                        handleAddToChoice ={handleAddToChoice}                                            
                    ></Show>)
                }
            </div>
            <div className="choice-container">
                <div className="content">
                    <h2 className="chli">Choice List: {carts.length}</h2>
                    {
                        carts.map(cart => <Cart
                            cart ={cart} key ={cart.id} 
                        ></Cart>)
                    }
                    
                    <button onClick={() => handleGenerateChoice()} className="cho-btn">Chose 1 for me</button>
                    <button className="cho-btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Products;