import React from "react";

const ProductCardHorizontal = () => {
  return (
    <section className="products-list__card-item">
      <section className="card card--horizontal products-list__card">
        <div className="card__image-container">
          <img
            src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="card__image"
          />
        </div>
        <div className="card__content">
          <h3 className="card__title">Asus Vivobook 14 Laptop</h3>
          <p className="card__author">Lorem ipsum dolor sit.</p>
          <p className="card__price">Lorem, ipsum dolor.</p>
          <div className="card__update-quantity flex">
            <span className="material-icons-round">remove</span>
            <p className="quantity-value">0</p>
            <span className="material-icons-round">add</span>
          </div>
        </div>
        <div className="card__remove-btn">
          <span className="material-icons-round">clear</span>
        </div>
      </section>
    </section>
  );
};

export { ProductCardHorizontal };