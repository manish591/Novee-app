import React from "react";

const ProductCardVertical = () => {
  return (
    <section className="card">
      <div className="card__image-container">
        <img
          src="https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/10106341/2020/12/4/ebd42abb-c45f-4290-b8e7-073f18f3b8541607088518050-HRX-by-Hrithik-Roshan-Ultralyte-Men-Black-Solid-Running-T-sh-1.jpg"
          alt=""
          className="card__img"
        />
        <button className="card__remove-wishlist">
          <span className="material-icons">favorite_border</span>
        </button>
        <div className="card__add-to-cart">
          <button className="card__add-cart-btn">Add To Cart</button>
        </div>
      </div>
      <div className="card__info">
        <div className="card__title">
          <p className="card__name">HRX by Hrithik Roshan</p>
          <p className="card__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, est!
          </p>
        </div>
        <div className="card__priceDetails d-flex">
          <p className="card__discountedPrice">Rs.658</p>
          <p className="card__realPrice">Rs.756</p>
          <p className="card__discount">(30% OFF)</p>
        </div>
      </div>
    </section>
  );
};

export { ProductCardVertical };