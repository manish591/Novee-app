import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

const Sidebar = () => {
  const { logoutUser } = useAuth();

  return (
    <aside className="sidebar grid" id="sidenav-open">
      <section className="sidebar__content">
        <div className="sidebar__top">
          <ul className="sidebar__top-list flex">
            <li className="sidebar__title">
              <h3>novee</h3>
            </li>
            <li className="sidebar__list-item sidebar--clear">
              <a href="#clear">
                <span className="material-icons clear-icon">clear</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar__bottom">
          <ul className="sidebar__list flex">
            <li className="sidebar__list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="sidebar__list-item">
              <Link to="/products">Tablets</Link>
            </li>
            <li className="sidebar__list-item">
              <Link to="/products">Mobiles</Link>
            </li>
            <li className="sidebar__list-item">
              <Link to="/products">Laptops</Link>
            </li>
            <li className="sidebar__list-item">
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
          <ul className="sidebar__list flex">
            <li className="sidebar__list-item">
              <a href="/profile">Account</a>
            </li>
            <li className="sidebar__list-item">
              <button type="button" onClick={logoutUser}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </section>
      <a
        href="#close"
        id="sidenav-close"
        className="sidebar__close"
        title="Close Menu"
        style={{ visibility: 'hidden' }}>
        close
      </a>
    </aside>
  );
};

export { Sidebar };
