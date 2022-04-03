import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { useStateContext, useAppActions, useAuthContext } from "../../hooks";

const SingleProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { state, stateDispatch } = useStateContext();
  const {
    isAlreadyInDatabase,
    addProductsToCart,
    addItemToTheWishlist,
    removeItemFromWishlist,
  } = useAppActions();
  const { isUserLogedIn, currentUser } = useAuthContext();

  const { productId } = useParams();

  const singleProduct = state.productData.find(
    (item) => item._id === productId
  );

  const { _id, title, description, brand, price, discount } = singleProduct;

  return (
    <div className="single-product">
      <div className="single-product__wrapper grid">
        <div className="single-product__img-container">
          <img
            className="single-product__image"
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="laptop"
          />
        </div>
        <div className="single-product__content sp-content">
          <section className="sp-content__header">
            <p>{brand}</p>
            <h1 className="sp-content__title">{title}</h1>
          </section>
          <section className="sp-content__desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              animi voluptatum fugiat nulla earum doloremque, natus aperiam
              perferendis. Quo tenetur aperiam vero qui expedita nisi ipsam
              necessitatibus sequi sint ipsa!
              {description}
            </p>
          </section>
          <section className="sp-content__pricing flex">
            <p className="sp-content__discount-price">
              {(price - price * (discount / 100)).toFixed(0)}
            </p>
            <p className="sp-content__discount-rate">{discount}%</p>
            <p className="sp-content__actual-price">{price}</p>
          </section>
          <section className="sp-content__actions flex">
            {isAlreadyInDatabase(state.wishlistData, _id) ? (
              <button
                className="btn btn--outlined-secondary"
                onClick={(e) =>
                  removeItemFromWishlist({
                    e,
                    _id,
                    currentUser,
                    stateDispatch,
                    setIsLoading,
                  })
                }
                disabled={isLoading}
              >
                Remove From Wishlist
              </button>
            ) : (
              <button
                className="btn btn--outlined-secondary"
                onClick={(e) =>
                  addItemToTheWishlist({
                    e,
                    _id,
                    product,
                    currentUser,
                    stateDispatch,
                    setIsLoading,
                  })
                }
                disabled={isLoading}
              >
                Add To Wishlist
              </button>
            )}
            {isAlreadyInDatabase(state.cartData, _id) ? (
              <button
                className="btn btn--contained-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/cart");
                }}
              >
                Go To Cart
              </button>
            ) : (
              <button
                className="btn btn--contained-primary"
                onClick={(e) =>
                  isUserLogedIn
                    ? addProductsToCart({
                        e,
                        _id,
                        product: singleProduct,
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
          </section>
        </div>
      </div>
    </div>
  );
};

export { SingleProduct };
