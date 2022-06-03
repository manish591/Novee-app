import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <h1 className="settings-page__title">Settings</h1>
      <div className="settings-page__container grid">
        <div className="settings-page__theme theme-setting">
          <p className="setting-page__heading">Theme Settings</p>
          <div className="theme-setting__group">
            <label htmlFor="theme">Choose Theme</label>
            <select name="theme" id="theme">
              <option value="System Default">System Default</option>
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
          </div>
        </div>
        <div className="settings-page__language lang-setting">
          <p className="setting-page__heading">Language Settings</p>
          <div className="lang-setting__group">
            <label htmlFor="lang">Choose Language</label>
            <select name="lang" id="lang">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
        <div className="settings-page__account">
          <p className="setting-page__heading">Account Setting</p>
          <button type="button" className="btn btn--contained-primary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export { Settings };
