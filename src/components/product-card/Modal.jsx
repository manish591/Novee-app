import React from 'react';
import PropTypes from 'prop-types';
import { useAppActions } from 'hooks';

const Modal = ({
  _id,
  product,
  setCurrentId,
  stateDispatch,
  setIsLoading,
  disableButton,
  setDisableButton,
  removeProductsFromCart,
}) => {
  const { moveToWishlist } = useAppActions();
  return (
    <section className="dialog dialog--alert" style={{ inlineSize: '350px' }}>
      <div className="dialog__content">
        <button
          type="button"
          className="material-icons dialog__clear"
          onClick={() => setCurrentId('')}>
          clear
        </button>
        <div className="dialog__info wrapper">
          <h3 className="dialog__header">Dialog Header</h3>
        </div>
        <div className="dialog__cta wrapper">
          <button
            type="button"
            className="dialog__action-btn"
            onClick={() => {
              removeProductsFromCart({
                _id,
                stateDispatch,
                setIsLoading,
                setDisableButton,
              });
              setCurrentId('');
            }}
            disabled={disableButton}>
            Remove
          </button>
          <button
            type="button"
            className="dialog__action-btn"
            onClick={() => {
              moveToWishlist({
                _id,
                stateDispatch,
                setIsLoading,
                product,
                setDisableButton,
              });
              setCurrentId('');
            }}
            disabled={disableButton}>
            Move To Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

Modal.propTypes = {
  _id: PropTypes.string.isRequired,
  disableButton: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
  stateDispatch: PropTypes.func.isRequired,
  removeProductsFromCart: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  setDisableButton: PropTypes.func.isRequired,
  setCurrentId: PropTypes.func.isRequired,
};

export { Modal };
