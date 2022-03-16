import React from "react";

import { Link } from 'react-router-dom';

const ProfileDropdown = ({ isDropdownVisible }) => {
  return (
    <div className={`profile__dropdown ${isDropdownVisible ? 'profile__dropdown--show' : ''}`}>
      <ul className="profile__list grid">
        <li className="profile__greeting">
          <h3>Hello! Manish</h3>
        </li>
        <li className="profile__greeting">
          <button className="btn btn--contained-primary profile__btn">
            <Link to="/login">Login/Signup</Link>
          </button>
        </li>
      </ul>
      <ul className="profile__list grid">
        <li className="profile__item">Orders</li>
        <li className="profile__item">
            <Link to="/wishlist">Wishlist</Link>
        </li>
        <li className="profile__item">Gift cards</li>
        <li className="profile__item">Contact Us</li>
      </ul>
      <ul className="profile__list grid">
        <li className="profile__item">Coupons</li>
        <li className="profile__item">Saved Cards</li>
        <li className="profile__item">Saved Addresses</li>
      </ul>
      <ul className="profile__list grid">
        <li className="profile__item">Edit Profile</li>
        <li className="profile__item">LogOut</li>
      </ul>
    </div>
  );
};

export { ProfileDropdown };
