import './App.css';
import React, { useState, useEffect } from 'react';
import StoreContainer from './containers/StoreContainer';
import ProductList from './components/ProductList';
import Basket from './components/Basket';
import NavBar from './components/NavBar';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {

    const [products, setProducts] = useState([])
    // const [selectedProduct, setSelectedProduct] = useState("")
    const [basketItems, setBasketItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountCodes, setDiscountCodes] = useState([{code: "discount10", value:10}])
    const [discount10, setDiscount10] = useState(false)

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
    }, [])

    const onHandleClick = (product) => {
      // setSelectedProduct(product)
      const array = basketItems;
      array.push(product);
      setBasketItems(array);
      const price = basketItems.reduce((accumulator, basketItem) => {
        return accumulator + basketItem.price
      }, 0);
      setTotalPrice(price)
    }
  
    const onHandleDiscount = (input) => {
      const code = discountCodes.filter((code) => 
          code.code === input
        )
      if (code.length>0) {setDiscount10(true)}
    }

    
      
    


    return (
        <>
          <Router>
              <NavBar/>
              <Routes>
                  <Route path="/" element={<StoreContainer/>}/>
                  <Route path="/productlist" element={<ProductList products={products} onHandleClick={onHandleClick} />}/>
                  <Route path="/basket" element={<Basket basketItems={basketItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} onHandleDiscount={onHandleDiscount} discount10={discount10} />} />
                  <Route path="/:id" element={<ProductDetails products={products} />}/>
              </Routes>
          </Router>
        </>
    )
}

export default App