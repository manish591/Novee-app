import React from 'react';
import PropTypes from 'prop-types';
import { useAppActions, useStateContext } from 'hooks';
import { Modal } from './Modal';
import { Image } from '../image/Image';

const ProductCardHorizontal = ({ product, currentId, setCurrentId }) => {
  const { _id, img, title, description, qty = 1 } = product;
  const { removeProductsFromCart, updateCartQuantity } = useAppActions();
  const { stateDispatch, disableButton, setDisableButton } = useStateContext();

  return (
    <section className="products-list__card-item">
      <section className="card card--horizontal products-list__card">
        <div className="card__image-container--cart">
          <Image title={title} img={img} />
        </div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <p className="card__author">{description}</p>
          <div className="card__update-quantity flex">
            <button
              type="button"
              className="card__update-quantity--remove"
              onClick={() =>
                updateCartQuantity(_id, 'decrement', setDisableButton)
              }
              disabled={qty === 1 || disableButton}>
              <span className="material-icons-round cart-icon-quantity">
                remove
              </span>
            </button>
            <p className="quantity-value">{qty}</p>
            <button
              type="button"
              className="card__update-quantity--add"
              onClick={() =>
                updateCartQuantity(_id, 'increment', setDisableButton)
              }
              disabled={disableButton}>
              <span className="material-icons-round cart-icon-quantity">
                add
              </span>
            </button>
          </div>
        </div>
        <button
          type="button"
          className="card__remove-btn"
          onClick={() => {
            setCurrentId(_id);
          }}
          disabled={disableButton}>
          <span className="material-icons-round">clear</span>
        </button>
      </section>
      {currentId === _id ? (
        <Modal
          setCurrentId={setCurrentId}
          removeProductsFromCart={removeProductsFromCart}
          _id={_id}
          stateDispatch={stateDispatch}
          product={product}
          setDisableButton={setDisableButton}
          disableButton={disableButton}
        />
      ) : null}
    </section>
  );
};

ProductCardHorizontal.propTypes = {
  product: PropTypes.object.isRequired,
  currentId: PropTypes.string.isRequired,
  setCurrentId: PropTypes.func.isRequired,
};

export { ProductCardHorizontal };
