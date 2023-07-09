import React from 'react';
import { Link } from 'react-router-dom';

const BasketItem = ({basketItem}) => {

  
    return (
        <li><Link to={`/${basketItem.id}`}>{basketItem.title}</Link></li>
    )

}

export default BasketItem;