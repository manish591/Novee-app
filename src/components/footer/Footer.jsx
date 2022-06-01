import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper flow-space-2">
        <p className="footer__brand">noveee</p>
        <ul className="footer__list flex">
          <li className="footer__items">
            <Link to="/">Home</Link>
          </li>
          <li className="footer__items">
            <Link to="/products">Men</Link>
          </li>
          <li className="footer__items">
            <Link to="/products">Women</Link>
          </li>
          <li className="footer__items">
            <Link to="/products">Kids</Link>
          </li>
        </ul>
        <p className="footer__description">
          Welcome to Novee. We offer a premium selection of clothing for men,
          women and kids. Whether you&apos;re looking for a new pair of jeans or
          a sweatshirt to replenish your closet, we have options from top
          designers and major brands.
        </p>
        <p className="footer__copyright">Copyright 2022. All Rights Reserved</p>
        <ul className="footer__socials flex">
          <li className="footer__items">
            <a
              href="https://github.com/manish591"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </li>
          <li className="footer__items">
            <a
              href="https://twitter.com/manishdevrani77"
              target="_blank"
              rel="noreferrer">
              Twitter
            </a>
          </li>
          <li className="footer__items">
            <a
              href="https://www.linkedin.com/in/manishdevrani77/"
              target="_blank"
              rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
