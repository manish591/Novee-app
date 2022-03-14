import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper flow-space-2">
        <p className="footer__brand">noveee</p>
        <ul className="footer__list flex">
          <li className="footer__items">Home</li>
          <li className="footer__items">Laptops</li>
          <li className="footer__items">Tablets</li>
          <li className="footer__items">Phones</li>
        </ul>
        <p className="footer__description">
          Novee provides you with the best electronics material. We'll provide
          you laptops, tablets, phones of higher quality. Login to get started.
        </p>
        <p className="footer__copyright">Copyright 2022. All Rights Reserved</p>
        <ul className="footer__socials flex">
          <li className="footer__items">Github</li>
          <li className="footer__items">Twitter</li>
          <li className="footer__items">LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
