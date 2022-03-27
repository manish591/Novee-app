import React from "react";
import { useState } from "react";
import { useAuth } from "../../hooks";
import { useStateContext } from "../../hooks";
import { useAppActions } from "../../hooks";

const WishlistCard = ({ product }) => {
  const { _id, image, title, price, discount } = product;
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useAuth();
  const { stateDispatch } = useStateContext();
  const { removeItemFromWishlist, findDiscountedPrice, moveItemToCart } =
    useAppActions();

  return (
    <div className="card">
      <div className="card__image-container">
        <img
          src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG1vYmlsZSUyMHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="phone"
          className="card__img"
        />
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
          <span className="material-icons">clear</span>
        </button>
      </div>
      <div className="card__info">
        <div className="card__title">
          <p className="card__name">{title}</p>
        </div>
        <div className="card__priceDetails d-flex">
          <p className="card__discountedPrice">
            Rs.{findDiscountedPrice(price, discount)}
          </p>
          <p className="card__realPrice">Rs.{price}</p>
          <p className="card__discount">({discount}% OFF)</p>
        </div>
      </div>
      <button
        className="card__moveToBagBtn"
        onClick={() =>
          moveItemToCart({
            _id,
            product,
            currentUser,
            stateDispatch,
            setIsLoading,
          })
        }
        disabled={isLoading}
      >
        Move To Cart
      </button>
    </div>
  );
};

export { WishlistCard };
