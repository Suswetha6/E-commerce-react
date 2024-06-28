import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
import { useState } from 'react';
import Cart from './components/Cart';
import CartContext from './context/CartContext';

function App() {
  
  let [cart, setCart] = useState({});
  function increaseQuantity(product) {
    const newCart = { ...cart };
    
    if (!newCart[product.id]) {
      newCart[product.id] = {
        ...product,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    console.log(newCart);
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  console.log(a, b);
  return (
    <CartContext.Provider value={{cart,increaseQuantity,decreaseQuantity}}>
      <div className="App">
      <Products />
      <Cart /> 
      </div >
    </CartContext.Provider>
    
  );
}

export default App;
