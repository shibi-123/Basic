import Menu from "./MenuComponent/Menu"
import './App.css';

const menuitem = [
  { id:1, name: "Golden Chicken Surprise", price:7.5, qty:5 },
  { id:2, name: "Mini Feast" , price:5.0 , qty:2},
  { id:3, name: "Chicken Fillet Burger", price:1.5,qty:2},
  { id:4, name: "Burgain Box", price:6.50, qty:1},
  { id:5, name: "Chicken Feast", price:8.50, qty:7},
  { id:6, name:"Family Feast", price:6.89 ,qty: 1}
]



function App() {
  
  return (
    <div>
     <h1 className="header"> MENU </h1>
     <Menu menuitem= {menuitem} />
    </div>
  );
}

export default App;
