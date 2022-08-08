import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { useAuth, useScrollToTop } from 'hooks';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loginErrorData, setLoginErrorData] = useState({
    emailError: '',
    passwordError: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useAuth();
  const location = useLocation();
  const from = location?.state;

  const handleUserLogin = async (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, from);
  };

  const handleGuestLogin = () => {
    setLoginData({
      email: 'manishdevrani777@gmail.com',
      password: 'manishdevrani777',
    });
    loginUser('manishdevrani777@gmail.com', 'manishdevrani777', from);
  };

  const handleValidateUser = (e) => {
    const { name } = e.target;
    const isValid = e.target.validity.valid;
    const { validationMessage } = e.target;
    if (isValid) {
      setLoginErrorData({
        ...loginErrorData,
        [`${name}Error`]: '',
      });
    } else {
      setLoginErrorData({
        ...loginErrorData,
        [`${name}Error`]: validationMessage,
      });
    }
  };

  useScrollToTop();

  return (
    <main className="login">
      <div className="wrapper">
        <div className="login__header">
          <h1 className="login__title">Log In</h1>
          <p className="login__greeting">Welcome! Back</p>
        </div>
        <form className="login__form" onSubmit={handleUserLogin}>
          <section className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="login__email"
              autoComplete="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData((ld) => ({ ...ld, email: e.target.value }))
              }
              onBlur={handleValidateUser}
              required
            />
            <p className="error-state">{loginErrorData.emailError}</p>
          </section>
          <section className="password-container">
            <label htmlFor="password">Password</label>
            <section className="password-toggle">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="login__password"
                minLength="8"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData((ld) => ({ ...ld, password: e.target.value }))
                }
                onBlur={handleValidateUser}
                required
              />
              <button
                type="button"
                className="password-toggle__icon"
                onClick={() => {
                  setShowPassword((sp) => !sp);
                }}>
                {showPassword ? (
                  <span className="material-icons-outlined">
                    visibility_off
                  </span>
                ) : (
                  <span className="material-icons-outlined">visibility</span>
                )}
              </button>
            </section>
            <p className="error-state">{loginErrorData.passwordError}</p>
          </section>
          <section className="submit-btn">
            <button type="submit" className="login__submit">
              Log In
            </button>
          </section>
        </form>
        <div className="login__footer">
          <p>Don&apos;t Have an account? </p>
          <button type="submit" className="login__signup">
            <Link to="/signup" replace>
              Sign Up
            </Link>
          </button>
        </div>
        <div className="guest-login">
          <p>or</p>
          <button
            type="button"
            className="guest-login__btn"
            onClick={handleGuestLogin}>
            Guest Login
          </button>
        </div>
      </div>
    </main>
  );
};

export { Login };
