import React from "react";
import { useAppActions } from "../../hooks";

const Modal = ({
  setCurrentId,
  removeProductsFromCart,
  _id,
  currentUser,
  stateDispatch,
  setIsLoading,
  product
}) => {
  const { moveToWishlist } = useAppActions();
  return (
    <section className="dialog dialog--alert" style={{ inlineSize: "350px" }}>
      <div className="dialog__content">
        <span
          className="material-icons dialog__clear"
          onClick={() => setCurrentId("")}
        >
          clear
        </span>
        <div className="dialog__info wrapper">
          <h3 className="dialog__header">Dialog Header</h3>
        </div>
        <div className="dialog__cta wrapper">
          <button
            className="dialog__action-btn"
            onClick={() => {
              removeProductsFromCart({
                _id,
                stateDispatch,
                setIsLoading,
              });
              setCurrentId("");
            }}
          >
            Remove
          </button>
          <button
            className="dialog__action-btn"
            onClick={() => {
              moveToWishlist({
                _id,
                stateDispatch,
                setIsLoading,
                product
              });
              setCurrentId("");
            }}
          >
            Move To Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export { Modal };
