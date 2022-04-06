import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { useStateContext, useAppActions, useAuthContext } from "../../hooks";
import { Image } from "../../components/image/Image";

const SingleProduct = () => {
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

  const { _id, img, title, description, brand, price, discount } =
    singleProduct;

  return (
    <div className="single-product">
      <div className="single-product__wrapper grid">
        <div className="single-product__img-container">
          <Image title={title} img={img} />
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
                  })
                }
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
                    product: singleProduct,
                    currentUser,
                    stateDispatch,
                  })
                }
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
                      })
                    : navigate("/login", { state: location.pathname })
                }
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
