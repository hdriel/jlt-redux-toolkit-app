import React from "react";
import { AiOutlineShoppingCart, AiOutlineDollar } from "react-icons/all";

function Cart({ totalProducts = 0, totalPrice = 0 }) {
  return (
    <div className="cart-container">
      TOTAL <AiOutlineDollar />
      {totalPrice} <AiOutlineShoppingCart /> ({totalProducts})
    </div>
  );
}

export default Cart;
