import React from "react";

import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks';

const ProfileDropdown = ({ isDropdownVisible }) => {
  const { 
    isUserLogedIn,
    currentUser,
    logoutUser
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`profile__dropdown ${isDropdownVisible ? 'profile__dropdown--show' : ''}`}>
      <ul className="profile__list grid">
        <li className="profile__greeting">
          <h3>{isUserLogedIn ? `Hello ${currentUser?.firstName}` : 'Please login!'}</h3>
        </li>
        <li className="profile__greeting">
          { !isUserLogedIn ? (
            <button 
              className="btn btn--contained-primary profile__btn" 
              onClick={() => navigate('/login', { state: location.pathname })}>
                Login/Signup
            </button>) : (
              null
          )}
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
        <li className="profile__item" onClick={logoutUser}>LogOut</li>
      </ul>
    </div>
  );
};

export { ProfileDropdown };
