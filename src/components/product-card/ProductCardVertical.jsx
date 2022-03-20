import React from "react";
import { useState } from "react";
import { useAppActions } from "../../hooks";
import { useStateContext } from "../../hooks";
import { useAuth } from "../../hooks";
import { useNavigate, useLocation, Link } from "react-router-dom";

const ProductCardVertical = ({ product }) => {
  const {
    isAlreadyInDatabase,
    addItemToTheWishlist,
    removeItemFromWishlist,
    findDiscountedPrice,
    addProductsToCart,
  } = useAppActions();
  const { state, stateDispatch } = useStateContext();
  const { currentUser, isUserLogedIn } = useAuth();
  const { _id, image, title, description, price, discount } = product;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const loaction = useLocation();

  return (
    <section className="card">
      <div className="card__image-container">
        <img
          src="https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/10106341/2020/12/4/ebd42abb-c45f-4290-b8e7-073f18f3b8541607088518050-HRX-by-Hrithik-Roshan-Ultralyte-Men-Black-Solid-Running-T-sh-1.jpg"
          alt=""
          className="card__img"
        />
        {isAlreadyInDatabase(state.wishlistData, _id) ? (
          <button
            className="card__remove-wishlist"
            onClick={() =>
              removeItemFromWishlist({
                _id,
                currentUser,
                stateDispatch,
                setIsLoading,
              })
            }
            disabled={isLoading}
          >
            <span className="material-icons">favorite</span>
          </button>
        ) : (
          <button
            className="card__remove-wishlist"
            onClick={() =>
              addItemToTheWishlist({
                _id,
                product,
                currentUser,
                stateDispatch,
                setIsLoading,
              })
            }
            disabled={isLoading}
          >
            <span className="material-icons">favorite_border</span>
          </button>
        )}
        <div className="card__add-to-cart">
          {isAlreadyInDatabase(state.cartData, _id) ? (
            <button
              className="card__add-cart-btn card__add-cart-btn--in-cart"
              onClick={() => navigate("/cart")}
            >
              Go To Cart
            </button>
          ) : (
            <button
              className="card__add-cart-btn"
              onClick={() =>
                isUserLogedIn
                  ? addProductsToCart({
                      _id,
                      product,
                      currentUser,
                      stateDispatch,
                      setIsLoading,
                    })
                  : navigate("/login", { state: location.pathname })
              }
              disabled={isLoading}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
      <div className="card__info">
        <div className="card__title">
          <p className="card__name">{title}</p>
          <p className="card__desc">{description}</p>
        </div>
        <div className="card__priceDetails d-flex">
          <p className="card__discountedPrice">
            Rs.{findDiscountedPrice(price, discount)}
          </p>
          <p className="card__realPrice">Rs.{price}</p>
          <p className="card__discount">({discount}% OFF)</p>
        </div>
      </div>
    </section>
  );
};

export { ProductCardVertical };
