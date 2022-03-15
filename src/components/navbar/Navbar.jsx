import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper flex">
        <ul className="navbar__list flex">
          <li className="navbar__items navbar__items--menu">
            <a href="#" className="navbar__items--icons">
              <span className="material-icons">menu</span>
            </a>
          </li>
          <li className="navbar__items navbar__items--logo">novee</li>
        </ul>
        <ul className="navbar__list flex navbar--hide navbar__list--links">
          <li className="navbar__items">Home</li>
          <li className="navbar__items">Laptops</li>
          <li className="navbar__items">Tablets</li>
          <li className="navbar__items">Phones</li>
        </ul>
        <ul className="navbar__list flex navbar__list--search">
          <li className="navbar__items navbar--hide navbar__items--search-bar">
            <div className="search-bar">
              <span className="material-icons search-icon">search</span>
              <input
                type="text"
                className="input-field"
                placeholder="search laptops, phones and tablets"
              />
            </div>
          </li>
          <li className="navbar__items navbar__items--icons navbar__items--search">
            <span className="material-icons">search</span>
          </li>
        </ul>
        <ul className="navbar__list flex">
          <li className="navbar__items navbar--hide navbar__items--icons navbar__items--profile profile">
            <span className="material-icons">person</span>
          </li>
          <li className="navbar__items navbar--hide navbar__items--icons navbar__items--wishlist">
            <a href="#" className="navbar__items--icons">
              <span className="material-icons">favorite_border</span>
            </a>
          </li>
          <li className="navbar__items navbar__items--icons">
            <a href="#" className="navbar__items--icons">
              <span className="material-icons">shopping_bag</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
