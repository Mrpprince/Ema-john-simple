import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = (props) => {
   
    const {name,quantity,key,price}=props.product;
    const reviewItem ={
        borderBottom:'1px solid lightgray',
        marginBottom:"5px",
        paddingBottom:"5px",
        marginLeft:"200px"
    };
    return (
        <div style={reviewItem} className="review-item">
            <h4 className="product-name">{name}</h4>
    <p>Quantity: {quantity}</p>
    <br/>
    <p><small>${price}</small></p>
    <button className="main-button" onClick={()=>(props.removedProduct(key))}> <FontAwesomeIcon icon={faShoppingCart} /> Remove
        </button>        
        </div>
    );
};

export default ReviewItem;