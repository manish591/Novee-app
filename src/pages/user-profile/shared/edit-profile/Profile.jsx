import React from 'react';
import './Profile.css';
import { useAuthContext } from 'hooks';

const ProfilePage = () => {
  const { currentUser } = useAuthContext();
  return (
    <div className="profile-page">
      <h1 className="profile-page__heading">My Profile</h1>
      <div className="profile-page__container grid">
        <p>
          Full Name:{' '}
          <strong>
            {currentUser.firstName} {currentUser.lastName}
          </strong>
        </p>
        <p>
          Email: <strong>{currentUser.email}</strong>
        </p>
      </div>
    </div>
  );
};

export { ProfilePage };
