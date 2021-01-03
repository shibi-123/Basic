import React from "react";
import { useState } from "react";
import './Menu.css'
import MenuBuilder from "./MenuContainer/menuBuilder"

function Menu({menuitem}){
    const [menu,setMenu] = useState(menuitem)
    const updateQty = (id,newqty) =>{
        const newMenu = menu.map(m => {
            if(m.id === id){
                return {...m, qty:newqty}
            }
            return m;
        });
        setMenu(newMenu)
    }

    const grandtotal = menu.reduce((total,m) => {
       return total + m.qty * m.price
    },0).toFixed(2)


   return(
       <div className="Menu">
        <h1 className="menuHeader">List Menu</h1>
         <div>
        {menu.map((m) => (
            <MenuBuilder key={m.id} updateQty={updateQty} {...m} />
        ))}
        </div> 
        <h2>Grand Total: {grandtotal} </h2>
        </div>
   )
}

export default Menu;