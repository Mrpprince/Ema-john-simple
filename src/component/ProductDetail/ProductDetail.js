import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';


const ProductDetail = () => {
    const {ProductKey}=useParams();
    const product =fakeData.find(pd=> pd.key===ProductKey)
    
    return (
      
        <div>
            <h1>Your Product details is coming soon...??</h1>
          <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;