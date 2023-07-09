import React from 'react';
import Product from './Product';

const ProductList = ({products, onHandleClick}) => {

    const productItems = products.map((product) => {
        return (
          <Product key={product.id} product={product} onHandleClick={onHandleClick} /> 
        )
    })

  return (
    <>
        <h3>ProductList</h3>
        <ul>{productItems}</ul>
    </>
  )
}

export default ProductList;