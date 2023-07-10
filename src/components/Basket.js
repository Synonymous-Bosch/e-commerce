import React from 'react';
import DiscountCode from './DiscountCode';
import BasketItem from './BasketItem';


const Basket = ({basketItems, displayPrice, onHandleDiscount}) => {

    const basketItemNodes = basketItems.map((basketItem) => {
      return (
        <BasketItem key={basketItem.id} basketItem={basketItem}/>
      )
    })

    

  return (
    <>
    <h3>Your Basket</h3>
    <p>Total: £{displayPrice.toFixed(2)} </p>
    <DiscountCode onHandleDiscount={onHandleDiscount}/>
    <ul>{basketItemNodes}</ul>
    
    </>
  )
}

export default Basket;