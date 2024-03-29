import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { ProfileDropdown } from '../profile-dropdown/Profile.dropdown';
import { useStateContext } from '../../hooks';

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state, stateDispatch } = useStateContext();
  const navigate = useNavigate();

  const handleSearchProducts = (e) => {
    e.preventDefault();
    if (searchQuery === '') return;
    stateDispatch({
      type: 'FILTER_BY_SEARCH_QUERY',
      payload: { searchFor: searchQuery },
    });
    setSearchQuery('');
    navigate('/products');
  };

  return (
    <nav className="navbar">
      <div className="navbar__wrapper flex">
        <ul className="navbar__list flex">
          <li className="navbar__items navbar__items--menu">
            <a href="#sidenav-open" className="navbar__items--icons">
              <span className="material-icons">menu</span>
            </a>
          </li>
          <li className="navbar__items navbar__items--logo">
            <Link to="/">novee</Link>
          </li>
        </ul>
        <ul className="navbar__list flex navbar--hide navbar__list--links">
          <li className="navbar__items">
            <Link to="/products">Shop</Link>
          </li>
          <li className="navbar__items">
            <button
              type="button"
              onClick={() => {
                navigate('/products', { state: { idealFor: 'Men' } });
              }}>
              Men
            </button>
          </li>
          <li className="navbar__items">
            <button
              type="button"
              onClick={() => {
                navigate('/products', { state: { idealFor: 'Women' } });
              }}>
              Women
            </button>
          </li>
        </ul>
        <ul className="navbar__list flex navbar__list--search">
          <li className="navbar__items navbar__items--search-bar">
            <form className="search-bar" onSubmit={handleSearchProducts}>
              <span className="material-icons search-icon">search</span>
              <input
                type="text"
                className="input-field"
                placeholder="search.."
                id="search-products"
                name="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <label htmlFor="search-products" className="sr-only">
                Serach-Products
              </label>
            </form>
          </li>
        </ul>
        <ul className="navbar__list flex">
          <li className="navbar__items navbar--hide navbar__items--icons navbar__items--profile profile">
            <button
              type="button"
              onClick={() => {
                setIsDropdownVisible((d) => !d);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}>
              <span className="material-icons-outlined">person</span>
            </button>
            <ProfileDropdown
              isDropdownVisible={isDropdownVisible}
              setIsDropdownVisible={setIsDropdownVisible}
            />
          </li>
          <li className="navbar__items navbar--hide navbar__items--icons navbar__items--wishlist">
            <Link to="/wishlist" className="navbar__items--icons">
              <span className="material-icons">favorite_border</span>
            </Link>
          </li>
          <li className="navbar__items navbar__items--icons">
            <Link to="/cart" className="navbar__items--icons">
              <section className="badge" style={{ marginBlockStart: '2px' }}>
                <span className="material-icons-outlined">shopping_bag</span>
                {state.cartData?.length > 0 ? (
                  <p
                    className="badge__info badge__info--standard badge__info--primary"
                    style={{
                      insetInlineEnd: '-5px',
                      backgroundColor: 'var(--brand)',
                    }}>
                    {state.cartData?.length}
                  </p>
                ) : null}
              </section>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
