import React from 'react';
import DiscountCode from './DiscountCode';
import BasketItem from './BasketItem';


const Basket = ({basketItems, totalPrice, onHandleDiscount, discount10}) => {

    const basketItemNodes = basketItems.map((basketItem) => {
      return (
        <BasketItem key={basketItem.id} basketItem={basketItem}/>
      )
    })

    

  return (
    <>
    <h3>Your Basket</h3>
    { discount10===true ? <p>Total: £{(totalPrice * 0.9).toFixed(2)}</p> : <p>Total: £{totalPrice.toFixed(2)} </p>}
    <DiscountCode onHandleDiscount={onHandleDiscount}/>
    <ul>{basketItemNodes}</ul>
    
    </>
  )
}

export default Basket;