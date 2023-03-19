import React from "react";
import { AiOutlineShoppingCart, AiOutlineDollar } from "react-icons/ai";

function Cart({ totalProducts = 0, totalPrice = 0 }) {
  console.log("Cart rendered");
  return (
    <div className="cart-container">
      <AiOutlineDollar /> {totalPrice}
      <AiOutlineShoppingCart /> {totalProducts}
    </div>
  );
}

export default Cart;
