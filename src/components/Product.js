import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product, onHandleClick}) => {

    const handleClick = () => {
        onHandleClick(product);
        // console.log(product.title)
    }

  return (
    
    <li>
        <Link to={`/${product.id}`}>{product.title}</Link>
        <button onClick={handleClick}>Add to basket</button>
    </li>
    
  )
}

export default Product;