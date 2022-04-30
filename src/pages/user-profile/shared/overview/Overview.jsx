import React from "react";
import "./Overview.css";

import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="profile-overview grid">
      <section className="profile-overview__header flex">
        <div className="profile-overview__icon">
          <span className="material-icons-round">account_box</span>
        </div>
        <button className="profile-overview__edit-profile btn btn--outlined-secondary">
          Edit Profile
        </button>
      </section>
      <section className="profile-overview__links overview-link grid">
        <Link to="/profile/orders" className="overview-link__item flex">
          <h3>Order</h3>
          <p>Check Your Order Status</p>
        </Link>
        <Link to="/wishlist" className="overview-link__item flex">
          <h3>Wishlist</h3>
          <p>Check Your Wishlist</p>
        </Link>
        <Link to="/profile/address" className="overview-link__item flex">
          <h3>Address</h3>
          <p>Save Address Here</p>
        </Link>
        <Link to="/profile/coupons" className="overview-link__item flex">
          <h3>Coupons</h3>
          <p>Find Additional Discounts</p>
        </Link>
        <Link to="/profile/edit" className="overview-link__item flex">
          <h3>Profile</h3>
          <p>Edit Your Details</p>
        </Link>
        <Link to="/profile/settings" className="overview-link__item flex">
          <h3>Settings</h3>
          <p>Chnage Theme and language </p>
        </Link>
      </section>
      <section className="profile-overview__logout">
        <button className="btn btn--contained-primary">Logout</button>
      </section>
    </div>
  );
};

export { Overview };
