import React from "react";
import './menuBuilder.css'

function MenuBuilder({id,name,price,qty,updateQty}){
    const subtract = () => updateQty(id,qty-1);
    const add = () => updateQty(id,qty+1);
     return(
        <div className="menuItem">
            <div className="name">{name}</div>
            <div>{price}</div>
            <button onClick={subtract} disabled={qty <= 0}> - </button>
            <div>{qty}</div>
            <button onClick ={add} > + </button>
            <div>$ {(qty*price).toFixed(2)}</div>
        </div>
   )
}

export default MenuBuilder;