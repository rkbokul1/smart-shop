import React, { useEffect, useState } from "react";
import './Products.css';

const Products = () =>{

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    return(
        <div>
            {
                products.map
            }
        </div>
    );
};

export default Products;