import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../Reviewitem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';



const Review = () => {
    const [cart ,setCart]= useState([]);
    const [orderPlaced,setOrderPlaced]=useState(false);
    const handldlePlaceOrder=()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    const removedProduct=(productKey)=>{
        const newCart=cart.filter((pd)=>pd.key!==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
   useEffect(()=>{
       const saveData= getDatabaseCart();
       const prokey=Object.keys(saveData);
       const cartProducts=prokey.map((key)=>{
           const product= fakeData.find((pd=>pd.key==key));
           product.quantity=saveData[key];
           return product;
       })
       setCart(cartProducts);

   },[])
   let thankyou;
   if(orderPlaced)
   {
       thankyou= <img src={happyImage} alt=""/>
   }
    return (
       
        <div className="twin-container">
          
          <div className="product-container">
          {
              cart.map((pd)=><ReviewItem
              removedProduct={removedProduct}
              key={pd.key} product={pd}></ReviewItem>)
          }
          {
              thankyou
          }
          </div>
          <div className="cart-container">
             <Cart cart={cart}>
                 <button onClick={handldlePlaceOrder} className="main-button">Place Order</button>
             </Cart>
            </div>
            
        </div>
       
    );
};

export default Review;