import React from 'react';

const cart = (props) => {
    const cart=props.cart;
    console.log(cart);

    let total =0;
    for (let i=0;i<cart.length;i++)
    {
        const product =cart[i];
        total=total+product.price;
    }

    let shipping =0;
    if (total>35){
        shipping=0;
    }
  else  if (total>15)
    {
        shipping=4.99;
    }
    else if (total>0)
    {
        shipping=12.99;
    }
    
    const tax =Math.round(total/10);
    return (
        <div>
            <h4>Order summary</h4>
    <p>Items order: {cart.length}</p>
    <p><small>Shipping Coast :{shipping}</small></p>
    <p><small>Tax:{tax}</small></p>
    <p>Total Price :{total +shipping+tax}</p>
        </div>
    );
};

export default cart;