import React from 'react';
import PropTypes from 'prop-types';
import { useAuth, useStateContext, useAppActions } from 'hooks';
import { Image } from 'components';

const WishlistCard = ({ product }) => {
  const { _id, img, title, price, discount } = product;
  const { currentUser } = useAuth();
  const { stateDispatch, disableButton, setDisableButton } = useStateContext();
  const { removeItemFromWishlist, findDiscountedPrice, moveItemToCart } =
    useAppActions();

  // eslint-disable-next-line no-console
  console.log('wishlist', setDisableButton);

  return (
    <div className="card">
      <div className="card__image-container">
        <Image title={title} img={img} />
        <button
          type="button"
          className="card__remove-wishlist"
          onClick={(e) =>
            removeItemFromWishlist({
              e,
              _id,
              setDisableButton,
            })
          }
          disabled={disableButton}>
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
        type="button"
        className="card__moveToBagBtn"
        onClick={(e) =>
          moveItemToCart({
            e,
            _id,
            product,
            currentUser,
            stateDispatch,
            setDisableButton,
          })
        }
        disabled={disableButton}>
        Move To Cart
      </button>
    </div>
  );
};

WishlistCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export { WishlistCard };
