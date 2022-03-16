import React from "react";

const Login = () => {
  return (
    <main className="login">
      <div className="wrapper">
        <div className="login__header">
          <h1 className="login__title">Log In</h1>
          <p className="login__greeting">Welcome! Back</p>
        </div>
        <form className="login__form">
          <section className="email-container">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="login__email"
              autocomplete="email"
              required
            />
          </section>
          <section className="password-container">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="current-password"
              className="login__password"
              required
            />
          </section>
          <section className="additional-data">
            <section className="rememberMe-container">
              <input
                type="checkbox"
                id="rememberMe"
                className="login__remember-me"
              />
              <label for="rememberMe">Remember Me</label>
            </section>
            <button className="login__forgotPassword">Forgot password?</button>
          </section>
          <section className="submit-btn">
            <button type="submit" className="login__submit">
              Log In
            </button>
          </section>
        </form>
        <div className="login__footer">
          <p>Don't Have an account? </p>
          <button className="login__signup">
            <a href="/pages/signup.html">Sign Up</a>
          </button>
        </div>
      </div>
    </main>
  );
};

export { Login };