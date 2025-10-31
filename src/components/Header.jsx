import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🔥 FPT Aptech</div>
      <nav>
        <a href="#">About Us</a>
        <a href="#">Products</a>
        <a href="#">Locations</a>
        <button className="btn">Sign In</button>
        <button className="btn">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;