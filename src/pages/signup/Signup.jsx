import React from "react";

const Signup = () => {
  return (
    <main class="signup">
      <div class="wrapper">
        <div class="signup__header">
          <h1 class="signup__title">Sign Up</h1>
          <p class="signup__greeting">To Continue, Sign Up</p>
        </div>
        <form class="signup__form">
          <section class="name-container">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="signup__name"
              autocomplete="name"
            />
          </section>
          <section class="email-container">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="signup__email"
              autocomplete="email"
              required
            />
          </section>
          <section class="password-container">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="new-password"
              class="signup__password"
              required
            />
          </section>
          <section class="password-container">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              id="password"
              name="new-password"
              class="signup__password"
              required
            />
          </section>
          <section class="submit-btn">
            <button type="submit" class="signup__submit">
              Sign Up
            </button>
          </section>
        </form>
        <div class="signup__footer">
          <p>Already have an account?</p>
          <button class="signup__signup">
            <a href="/pages/login.html">Log In</a>
          </button>
        </div>
      </div>
    </main>
  );
};

export { Signup };