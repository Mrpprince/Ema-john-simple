
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const product = (props) => {
    console.log(props)
    const {img,name,seller,price,stock,key}=props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
    <h4 className="product-name"> <Link to={"Product/"+key}>{name}</Link> </h4>
    <br/>
    <p><small>by:{seller}</small></p>
    <p>${price}</p>
    <br/>
    <p><small>Only {stock} Left in stock, Order Soon</small></p>
   { props.showAddToCart && <button onClick={()=>(props.handlerAdd(props.product))} className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
            
        </div>
    );
};

export default product;