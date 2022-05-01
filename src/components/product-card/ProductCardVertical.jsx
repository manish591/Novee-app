import React from 'react';
import { useState } from 'react';
import { useAppActions } from '../../hooks';
import { useStateContext } from '../../hooks';
import { useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { Image } from '../image/Image';

const ProductCardVertical = ({ product }) => {
  const {
    isAlreadyInDatabase,
    addItemToTheWishlist,
    removeItemFromWishlist,
    findDiscountedPrice,
    addProductsToCart,
  } = useAppActions();
  const { state, stateDispatch, disableButton, setDisableButton } =
    useStateContext();
  const { currentUser, isUserLogedIn } = useAuth();
  const { _id, img, title, description, price, discount, ratings, inStock } =
    product;
  const navigate = useNavigate();

  return (
    <section
      className="card"
      onClick={() => {
        navigate(`/products/${_id}`);
      }}
    >
      <div className="card__image-container">
        <Image title={title} img={img} />
        {isAlreadyInDatabase(state.wishlistData, _id) ? (
          <button
            className={`card__remove-wishlist ${
              disableButton && 'btn--disabled'
            }`}
            onClick={(e) =>
              removeItemFromWishlist({
                e,
                _id,
                currentUser,
                stateDispatch,
                setDisableButton,
              })
            }
            disabled={disableButton}
          >
            <span className="material-icons">favorite</span>
          </button>
        ) : (
          <button
            className={`card__remove-wishlist ${
              !inStock ? 'wishlist--out-of-stck' : ''
            } `}
            onClick={(e) =>
              addItemToTheWishlist({
                e,
                _id,
                product,
                currentUser,
                stateDispatch,
                setDisableButton,
              })
            }
            disabled={disableButton}
          >
            <span className="material-icons">favorite_border</span>
          </button>
        )}
        <div
          className={`card__add-to-cart ${
            !inStock && 'card__add-to-cart--out-of-stock'
          }`}
        >
          {isAlreadyInDatabase(state.cartData, _id) ? (
            <button
              className={`card__add-cart-btn card__add-cart-btn--in-cart`}
              onClick={(e) => {
                e.stopPropagation();
                navigate('/cart');
              }}
            >
              Go To Cart
            </button>
          ) : (
            <button
              className={`card__add-cart-btn`}
              onClick={(e) =>
                isUserLogedIn
                  ? addProductsToCart({
                      e,
                      _id,
                      product,
                      currentUser,
                      stateDispatch,
                      setDisableButton,
                    })
                  : navigate('/login', { state: location.pathname })
              }
              disabled={disableButton}
            >
              Add To Cart
            </button>
          )}
        </div>
        <div className="card__rating flex">
          <p>{ratings}</p>
          <span className="material-icons-round">star</span>
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
        {!inStock && <p className="card__out-of-stock">Product out of stock</p>}
      </div>
    </section>
  );
};

export { ProductCardVertical };
