import React from 'react';
import './CartItem.css';

function CartItem({id, name, price, qty, updateQty}){
    // const addOne =()=>{
    //     return qty += 1   javascript incrementing the qty but react doesn't re-render return the qty upadte 
    // }

    const addOne= () => updateQty(id,qty+1)
    const subtractOne = () => updateQty(id,qty-1)

    return(
        <div className="CartItem">
            <div>{name}</div>
            <div>${price}</div>
            <div><button onClick={subtractOne} disabled={qty <= 0}>-</button>{qty}<button onClick={addOne}> + </button></div>
            <div>Total: ${qty*price} </div>
        </div>
    )
}


export default CartItem;