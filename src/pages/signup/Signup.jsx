import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useScrollToTop } from 'hooks';
import toast from 'react-hot-toast';

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [signupErrorData, setSignupErrorData] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    'confirm-passwordError': '',
  });
  const { signupUser } = useAuth();

  const handleUserSignup = (e) => {
    e.preventDefault();
    if (userDetails.confirmPassword !== userDetails.password) {
      toast.error('Password and confirm password not matching');
      return;
    }
    signupUser(userDetails.name, userDetails.email, userDetails.password);
  };

  const handleValidateUser = (e) => {
    const { name, validationMessage } = e.target;
    const isValid = e.target.validity.valid;
    if (isValid) {
      setSignupErrorData({ ...signupErrorData, [`${name}Error`]: '' });
    } else {
      setSignupErrorData({
        ...signupErrorData,
        [`${name}Error`]: validationMessage,
      });
    }
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
              onBlur={handleValidateUser}
              required
            />
            <p className="error-state">{signupErrorData.nameError}</p>
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
              onBlur={handleValidateUser}
              required
            />
            <p className="error-state">{signupErrorData.emailError}</p>
          </section>
          <section className="password-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="signup__password"
              minLength="8"
              value={userDetails.password}
              onChange={(e) => {
                setUserDetails((ud) => {
                  return { ...ud, password: e.target.value };
                });
              }}
              onBlur={handleValidateUser}
              required
            />
            <p className="error-state">{signupErrorData.passwordError}</p>
          </section>
          <section className="password-container">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="signup__password"
              minLength="8"
              value={userDetails.confirmPassword}
              onChange={(e) => {
                setUserDetails((ud) => {
                  return { ...ud, confirmPassword: e.target.value };
                });
              }}
              onBlur={handleValidateUser}
              required
            />
            <p className="error-state">
              {signupErrorData['confirm-passwordError']}
            </p>
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
