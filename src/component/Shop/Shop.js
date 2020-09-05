import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);

    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        console.log(productKeys);
        const previousCart = productKeys.map(exsistingKey => {
            const product = fakeData.find((pd) => pd.key === exsistingKey);
            product.quantity = saveCart[exsistingKey];
            console.log(exsistingKey, saveCart[exsistingKey]);
            return product;
        })
        setCart(previousCart);
    }, [])



    const handlerAddProduct = (product) => {
        const toBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key == toBeAdded);

        let count = 1;
        let newCart;
        if (sameProduct) {
            const count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...others, sameProduct];

        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map(pd => <Product
                        key={pd.key}
                        showAddToCart={true}
                        handlerAdd={handlerAddProduct}
                        product={pd}></Product>)
                }
            </div>

            <div className="card-container">

                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="main-button">Review button</button>
                    </Link>
                </Cart>

            </div>

        </div>
    );
};

export default Shop;