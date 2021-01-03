import React ,{useState, useEffect} from "react";
import CartItem from "./CartItem";
import './Cart.css'

function Cart({ items }){
    const [iTems, setItems] = useState(items);

    const updateQty = (id, newQty) => {
        const newItems = iTems.map(item =>{
            if(item.id ==id){
                return {...item, qty:newQty}
            }
            return item;
        });
        setItems(newItems)
    }

    const grandTotal = iTems.reduce((total,item) => {
         return total + item.qty * item.price
    },0).toFixed(2);

    return(
        <div className="Cart">
            <h1 className="Cart-title">Shopping Cart</h1>
          <div className="Cart-items">
          {iTems.map(item => (
                <CartItem key={item.id} updateQty={updateQty} {...item} />
          ))}
          </div>
            <h2 className="Cart-total">Grand Total: ${grandTotal}</h2>
        </div>
    )
}


export default Cart;