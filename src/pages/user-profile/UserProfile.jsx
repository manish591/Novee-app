import React from "react";
import { Overview } from "./shared/overview/Overview";
import { OrdersPage } from "./shared/orders/Orders";
import { Profile } from "./shared/edit-profile/Profile";
import { Settings } from "./shared/settings/Settings";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile__wrapper grid">
        <section className="user-profile__navigation up-links">
          <ul className="up-links__list">
            <li className="up-links__items">Overview</li>
            <li className="up-links__items">Orders</li>
            <li className="up-links__items">Addresses</li>
            <li className="up-links__items">Coupons</li>
            <li className="up-links__items">Profile</li>
            <li className="up-links__items">Settings</li>
          </ul>
        </section>
        <section className="user-profile__pages">
          <Settings />
        </section>
      </div>
    </div>
  );
};

export { UserProfile };
