import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile__wrapper grid">
        <section className="user-profile__navigation up-links">
          <ul className="up-links__list">
            <li className="up-links__items">
              <NavLink to="/profile">Overview</NavLink>
            </li>
            <li className="up-links__items">
              <NavLink to="/profile/orders">Orders</NavLink>
            </li>
            <li className="up-links__items">
              <NavLink to="/profile/address">Addresses</NavLink>
            </li>
            <li className="up-links__items">
              <NavLink to="/profile/coupons">Coupons</NavLink>
            </li>
            <li className="up-links__items">
              <NavLink to="/profile/edit">Profile</NavLink>
            </li>
            <li className="up-links__items">
              <NavLink to="/profile/settings">Settings</NavLink>
            </li>
          </ul>
        </section>
        <section className="user-profile__pages">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export { UserProfile };
