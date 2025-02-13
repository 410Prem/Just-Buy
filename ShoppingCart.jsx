import React from "react";

const ShoppingCart = ({ cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h2>Total: ${totalPrice}</h2>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default ShoppingCart;
