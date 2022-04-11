import React from "react";
import "./Profile.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h1 className="profile-page__heading">My Profile</h1>
      <div className="profile-page__container grid">
        <p>Full Name: Manish Devrani</p>
        <p>Email: manishdevrani777@gmail.com</p>
        <button className="btn btn--contained-primary">Edit Profile</button>
      </div>
    </div>
  );
};

export { ProfilePage };
