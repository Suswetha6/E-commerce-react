// import React from 'react';
// import { useSelector } from 'react-redux';

// function Cart() {
//   const cartItems = useSelector(state => state.items || []); // Access cart items from Redux store

//   if (!cartItems) {
//     return <p>Loading cart items...</p>;
//   }
//   // Calculate total cart price (optional)
//   const totalPrice = Object.values(cartItems).reduce((acc, item) => {
//     return acc + (item.price.value * item.quantity);
//   }, 0);

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is currently empty.</p>
//       ) : (
//         <ul>
//           {Object.entries(cartItems).map(([productId, item]) => (
//             <li key={productId}>
//               <div className="cart-item">
//                 <img src={item.imageUrl} alt={item.title} />
//                 <div className="cart-item-details">
//                   <h3>{item.title}</h3>
//                   <p>Price: ${item.price.value}</p>
//                   <p>Quantity: {item.quantity}</p>
                 
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       {totalPrice && ( // Display total price if available
//         <p className="cart-total">
//           Total Price: ${totalPrice.toFixed(2)}
//         </p>
//       )}
//     </div>
//   );
// }

// export default Cart;
import { useSelector } from "react-redux";

function Cart() {
    let cart = useSelector((state) => {
        return state.cart.items;
    })
    return (
        <div>
            <ul>
            {
                Object.values(cart).map((item) => {
                    return (<li key={item.id}>{item.title}</li>)
                })
                }
            </ul>
        </div>
    )
}

export default Cart;