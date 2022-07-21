import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';

const ProfileDropdown = ({ isDropdownVisible, setIsDropdownVisible }) => {
  const { isUserLogedIn, currentUser, logoutUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const compRef = useRef(null);

  useEffect(() => {
    const isClickedOutside = (e) => {
      if (compRef && !compRef.current.contains(e.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', isClickedOutside);

    return () => document.removeEventListener('mousedown', isClickedOutside);
  }, [compRef]);

  return (
    <div
      ref={compRef}
      className={`profile__dropdown ${
        isDropdownVisible ? 'profile__dropdown--show' : ''
      }`}>
      <ul className="profile__list grid">
        <li className="profile__greeting">
          <h3>
            {isUserLogedIn
              ? `Hello ${currentUser?.firstName}`
              : 'Please login!'}
          </h3>
        </li>
        <li className="profile__greeting">
          {!isUserLogedIn ? (
            <button
              type="button"
              className="btn btn--outlined-primary profile__btn"
              onClick={() => navigate('/login', { state: location.pathname })}>
              Login/Signup
            </button>
          ) : null}
        </li>
      </ul>
      <ul className="profile__list grid">
        <li className="profile__item">
          <Link to="/profile/orders">Orders</Link>
        </li>
        <li className="profile__item">
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li className="profile__item">
          <Link to="/cart">My Cart</Link>
        </li>
      </ul>
      <ul className="profile__list grid">
        <li className="profile__item">
          <Link to="/profile/coupons">Coupons</Link>
        </li>
        <li className="profile__item">
          <Link to="/profile/address">Saved Addresses</Link>
        </li>
      </ul>
      <ul className="profile__list grid">
        <li className="profile__item">
          <Link to="/profile">Edit Profile</Link>
        </li>
        {isUserLogedIn ? (
          <li className="profile__item">
            <button
              type="button"
              onClick={() => {
                logoutUser();
                setIsDropdownVisible(false);
              }}>
              LogOut
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

ProfileDropdown.propTypes = {
  isDropdownVisible: PropTypes.bool.isRequired,
  setIsDropdownVisible: PropTypes.func.isRequired,
};

export { ProfileDropdown };
