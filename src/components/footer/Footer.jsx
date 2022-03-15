import React from "react";

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
            <Link to="/products">Laptops</Link>
          </li>
          <li className="footer__items">
            <Link to="/products">Tablets</Link>
          </li>
          <li className="footer__items">
            <Link to="/products">Phones</Link>
          </li>
        </ul>
        <p className="footer__description">
          Novee provides you with the best electronics material. We'll provide
          you laptops, tablets, phones of higher quality. Login to get started.
        </p>
        <p className="footer__copyright">Copyright 2022. All Rights Reserved</p>
        <ul className="footer__socials flex">
          <li className="footer__items">
            <a href="#">Github</a>
          </li>
          <li className="footer__items">
            <a href="#">Twitter</a>
          </li>
          <li className="footer__items">
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
