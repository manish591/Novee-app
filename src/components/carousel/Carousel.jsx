import React from "react";

import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__slider">
          <span className="material-icons move-left">chevron_left</span>
          <section className="carousel">
            <article className="carousel__item carousel-slide flex">
              <div className="carousel-slide__info grid">
                <small className="carousel-slide__label">New Product</small>
                <h2 className="carousel-slide__name">ASUS Vivobook 14 Laptop</h2>
                <p className="carousel-slide__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, esse debitis! Quidem cumque eum illum?
                </p>
                <button className="carousel-slide__btn btn btn--contained-primary">
                  <Link to="/products">See Product</Link>
                </button>
              </div>
            </article>
          </section>
          <span className="material-icons move-right">chevron_right</span>
        </div>
      </div>
    </section>
  );
};

export { Carousel };