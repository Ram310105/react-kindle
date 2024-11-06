import React from "react";

const Header = () => {
  return (
    <header>
      <div className="menu-toggle" id="menu-toggle">
        <i className="fas fa-bars"></i>
      </div>
      <div className="logo">
        <img
          src="https://pbs.twimg.com/profile_images/922870890701905921/T4hOEwSe_400x400.jpg"
          alt="Logo"
          className="logo-img"
        />
        <h1>Kindle</h1>
      </div>
    </header>
  );
};

export default Header;
