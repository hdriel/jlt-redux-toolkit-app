import React from "react";
import Cart from "./CartConnected";
import UsernameHover from "./UsernameHover";

function Header({ title, username }) {
  return (
    <div className="header-container">
      <div className="header-title">
        {title} <UsernameHover />
      </div>

      <Cart />
    </div>
  );
}

export default Header;
