import React from "react";
import Cart from "./CartConnected";

function Header({ title }) {
  return (
    <div className="header-container">
      <div className="header-title">{title}</div>
      <Cart />
    </div>
  );
}

export default Header;
