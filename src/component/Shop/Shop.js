import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    console.log(first10);
   const [products,setProducts]= useState(first10);
   const [cart,setCart]=useState([]);
   const handlerAddProduct =(product)=>{
     
       const newCart=[...cart,product];
       
       setCart(newCart);
   }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                products.map(pd=> <Product 
                    handlerAdd={handlerAddProduct}
                     product={pd}></Product>)   
                }            
            </div>

                <div className="card-container">
                    
                   <Cart cart={cart}></Cart>
                    
                </div>
   
        </div>
    );
};

export default Shop;