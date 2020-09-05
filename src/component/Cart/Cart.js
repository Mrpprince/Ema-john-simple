import React from 'react';

const cart = (props) => {
    const cart=props.cart;
  

    let total =0;
    for (let i=0;i<cart.length;i++)
    {
        const product =cart[i];
        total=total+product.price*product.quantity;
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
    const g=(total +shipping+tax).toFixed(2);
    return (
        <div>
            <h4>Order summary</h4>
    <p>Items order: {cart.length}</p>
    <p><small>Shipping Coast :{shipping}</small></p>
    <p><small>Tax:{tax}</small></p>
    <p>Total Price :{g}</p>
    <br/>
    { props.children
    }
        </div>
    );
};

export default cart;