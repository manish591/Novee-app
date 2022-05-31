import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useScrollToTop } from 'hooks';

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { signupUser } = useAuth();

  const handleUserSignup = (e) => {
    e.preventDefault();
    if (userDetails.confirmPassword !== userDetails.password) return;
    signupUser(userDetails.name, userDetails.email, userDetails.password);
  };

  useScrollToTop();

  return (
    <main className="signup">
      <div className="wrapper">
        <div className="signup__header">
          <h1 className="signup__title">Sign Up</h1>
          <p className="signup__greeting">To Continue, Sign Up</p>
        </div>
        <form className="signup__form" onSubmit={handleUserSignup}>
          <section className="name-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="signup__name"
              autoComplete="name"
              value={userDetails.name}
              onChange={(e) => {
                setUserDetails((ud) => {
                  return { ...ud, name: e.target.value };
                });
              }}
              required
            />
          </section>
          <section className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="signup__email"
              autoComplete="email"
              value={userDetails.email}
              onChange={(e) => {
                setUserDetails((ud) => {
                  return { ...ud, email: e.target.value };
                });
              }}
              required
            />
          </section>
          <section className="password-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="new-password"
              className="signup__password"
              value={userDetails.password}
              onChange={(e) => {
                setUserDetails((ud) => {
                  return { ...ud, password: e.target.value };
                });
              }}
              required
            />
          </section>
          <section className="password-container">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="new-password"
              className="signup__password"
              value={userDetails.confirmPassword}
              onChange={(e) => {
                setUserDetails((ud) => {
                  return { ...ud, confirmPassword: e.target.value };
                });
              }}
              required
            />
          </section>
          <section className="submit-btn">
            <button type="submit" className="signup__submit">
              Sign Up
            </button>
          </section>
        </form>
        <div className="signup__footer">
          <p>Already have an account?</p>
          <button type="button" className="signup__signup">
            <Link to="/login">Log In</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export { Signup };
