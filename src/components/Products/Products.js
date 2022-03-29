import React, { useEffect, useState } from "react";
import Show from "../Show/Show";
import './Products.css';

const Products = () =>{

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    return(
        <div className="container">
            <div className="product-container">
                {
                    products.map(product => <Show 
                        product = {product} key ={product.id}                                            
                    ></Show>)
                }
            </div>
            <div className="choice-container">
                <h2 className="chli">Choice List</h2>
            </div>
        </div>
    );
};

export default Products;