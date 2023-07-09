import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({products}) => {
    
    const { id } = useParams();

    const product = products.filter((product) => {return product.id == id} )

    

    return (
        <>        
            <h1>ProductDetails</h1>
            <h3>{product[0].title}</h3>
            <p>£{product[0].price.toFixed(2)}</p>
            <p>{product[0].description}</p>
            <img src={product[0].image}/>
        </>

    )
}

export default ProductDetails 