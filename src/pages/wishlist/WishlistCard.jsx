import React from "react";

const WishlistCard = () => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img
          src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG1vYmlsZSUyMHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="phone"
          className="card__img"
        />
        <button className="card__remove-wishlist">
          <span className="material-icons">clear</span>
        </button>
      </div>
      <div className="card__info">
        <div className="card__title">
          <p className="card__name">HRX by Hrithik Roshan This is butdd</p>
        </div>
        <div className="card__priceDetails d-flex">
          <p className="card__discountedPrice">Rs.658</p>
          <p className="card__realPrice">Rs.756</p>
          <p className="card__discount">(30% OFF)</p>
        </div>
      </div>
      <button className="card__moveToBagBtn">Move To Cart</button>
    </div>
  );
};

export { WishlistCard };