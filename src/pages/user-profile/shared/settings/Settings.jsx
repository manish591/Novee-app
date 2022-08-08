import React from 'react';
import './Settings.css';
import { useAuth } from 'hooks';

const Settings = () => {
  const { logoutUser } = useAuth();
  return (
    <div className="settings-page">
      <h1 className="settings-page__title">Settings</h1>
      <div className="settings-page__container grid">
        <div className="settings-page__account">
          <p className="setting-page__heading">Account Setting</p>
          <button
            type="button"
            className="btn btn--contained-primary settings-page__logout"
            onClick={() => {
              logoutUser();
            }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export { Settings };
