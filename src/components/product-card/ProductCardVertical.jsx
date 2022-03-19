import React from "react";
import { useAppActions } from "../../hooks";
import { useStateContext } from "../../hooks";

const ProductCardVertical = ({
  _id,
  image,
  title,
  description,
  price,
  discount,
}) => {
  const { isAlreadyInWishlist } = useAppActions();
  const { state } = useStateContext();
  console.log(isAlreadyInWishlist(state.wishlistData, _id))

  return (
    <section className="card">
      <div className="card__image-container">
        <img
          src="https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/10106341/2020/12/4/ebd42abb-c45f-4290-b8e7-073f18f3b8541607088518050-HRX-by-Hrithik-Roshan-Ultralyte-Men-Black-Solid-Running-T-sh-1.jpg"
          alt=""
          className="card__img"
        />
        {isAlreadyInWishlist(state.wishlistData, _id) ? (
          <button className="card__remove-wishlist">
            <span className="material-icons">favorite</span>
          </button>
        ) : (
          <button className="card__remove-wishlist">
            <span className="material-icons">favorite_border</span>
          </button>
        )}
        <div className="card__add-to-cart">
          <button className="card__add-cart-btn">Add To Cart</button>
        </div>
      </div>
      <div className="card__info">
        <div className="card__title">
          <p className="card__name">{title}</p>
          <p className="card__desc">{description}</p>
        </div>
        <div className="card__priceDetails d-flex">
          <p className="card__discountedPrice">
            Rs.{(price - (price * Number(discount)) / 100).toFixed(0)}
          </p>
          <p className="card__realPrice">Rs.{price}</p>
          <p className="card__discount">({discount}% OFF)</p>
        </div>
      </div>
    </section>
  );
};

export { ProductCardVertical };
